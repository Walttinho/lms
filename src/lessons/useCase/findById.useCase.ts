import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaLessonRepository } from 'src/database/prisma/repository/prisma.lesson.repository';
import { Lesson } from '../entities/lesson.entity';
import { LessonRepository } from '../repository/lesson.repository';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { CourseRepository } from 'src/courses/repository/course.repository';

@Injectable()
export class FindLessonByIdUseCase {
  constructor(
    @Inject(PrismaLessonRepository) private lessonRepository: LessonRepository,
    @Inject(PrismaCourseRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(id: string, courseId: string): Promise<Lesson> {
    const course = await this.courseRepository.findById(courseId);
    if (!course) throw new NotFoundException('Course not found');
    const lesson = await this.lessonRepository.findById(id);
    if (!lesson) throw new NotFoundException('Lesson not found');
    return lesson;
  }
}
