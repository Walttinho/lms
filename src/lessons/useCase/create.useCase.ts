import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LessonRepository } from '../repository/lesson.repository';
import { PrismaLessonRepository } from 'src/database/prisma/repository/prisma.lesson.repository';
import { Lesson } from '../entities/lesson.entity';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { CourseRepository } from 'src/courses/repository/course.repository';

@Injectable()
export class CreateLessonUseCase {
  constructor(
    @Inject(PrismaLessonRepository)
    private lessonRepository: LessonRepository,
    @Inject(PrismaCourseRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(
    userRole: string,
    { name, description, content, role, courseId },
  ): Promise<Lesson> {
    if (!courseId) throw new BadRequestException('Course id is required');

    if (!name || !description || !content)
      throw new BadRequestException(
        'Name, description and content are required',
      );

    if (['STUDENTS'].includes(userRole)) {
      throw new UnauthorizedException(
        'Only admins and teachers can create lessons',
      );
    }

    const course = await this.courseRepository.findById(courseId);
    if (!course) throw new NotFoundException('Course not found');

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

    const lesson = new Lesson({
      name,
      description,
      content,
      role,
      courseId,
    });
    await this.lessonRepository.create(lesson);
    return lesson;
  }
}
