import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaLessonRepository } from 'src/database/prisma/repository/prisma.lesson.repository';
import { UpdateLessonDto } from '../dto/update-lesson.dto';
import { Lesson } from '../entities/lesson.entity';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { LessonRepository } from '../repository/lesson.repository';
import { CourseRepository } from 'src/courses/repository/course.repository';

@Injectable()
export class UpdateLessonByIdUseCase {
  constructor(
    @Inject(PrismaLessonRepository) private lessonRepository: LessonRepository,
    @Inject(PrismaCourseRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(
    courseId: string,
    lessonId: string,
    userRole: string,
    lessonUpdate: UpdateLessonDto,
  ): Promise<Lesson> {
    const { content, role } = lessonUpdate;

    if (['STUDENTS'].includes(userRole)) {
      throw new UnauthorizedException(
        'Only admins and teachers can update lessons',
      );
    }

    const course = await this.courseRepository.findById(courseId);
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const lesson = await this.lessonRepository.findById(lessonId);
    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    if (lesson.courseId !== course.id) {
      throw new UnauthorizedException('Lesson not part of the course');
    }
    if (['FILE'].includes(role)) {
      const fileExtension = content.split('.').pop().toLowerCase();
      const allowedExtensions = ['pdf', 'xlsx', 'docx', 'pptx'];
      if (!allowedExtensions.includes(fileExtension)) {
        throw new BadRequestException('Invalid file extension');
      }
    }

    if (['LINK'].includes(role)) {
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      if (!urlRegex.test(content)) {
        throw new BadRequestException('Invalid URL');
      }
    }

    if (
      ['TEXT'].includes(role) &&
      (content.length < 50 || content.length > 5000)
    ) {
      throw new BadRequestException(
        'Text content must be between 50 and 5000 characters',
      );
    }

    if (lessonUpdate.name) lesson.name = lessonUpdate.name;
    if (lessonUpdate.description) lesson.description = lessonUpdate.description;
    if (lessonUpdate.content) lesson.content = lessonUpdate.content;
    if (lessonUpdate.role) lesson.role = lessonUpdate.role;

    await this.lessonRepository.update(lesson);

    return lesson;
  }
}
