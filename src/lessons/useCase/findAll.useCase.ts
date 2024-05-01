import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LessonRepository } from '../repository/lesson.repository';
import { Lesson } from '../entities/lesson.entity';
import { CourseRepository } from 'src/courses/repository/course.repository';
import { PrismaLessonRepository } from 'src/database/prisma/repository/prisma.lesson.repository';

@Injectable()
export class FindAllLessonsUseCase {
  constructor(
    @Inject(PrismaLessonRepository) private lessonRepository: LessonRepository,
    @Inject(PrismaLessonRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(
    courseId: string,
    page: number,
    size: number,
  ): Promise<Lesson[]> {
    const skip = (page - 1) * size;
    const lessons = await this.lessonRepository.findAll(courseId, skip, size);

    if (!lessons || lessons.length === 0) {
      throw new NotFoundException('Lessons not found');
    }
    return lessons;
  }
}
