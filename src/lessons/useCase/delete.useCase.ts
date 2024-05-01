import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from 'src/courses/repository/course.repository';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { PrismaLessonRepository } from 'src/database/prisma/repository/prisma.lesson.repository';

@Injectable()
export class DeleteLessonByIdUseCase {
  constructor(
    @Inject(PrismaLessonRepository)
    private lessonRepository: PrismaLessonRepository,
    @Inject(PrismaCourseRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(id: string, courseId: string): Promise<void> {
    const course = await this.courseRepository.findById(courseId);
    if (!course) throw new NotFoundException('Course not found');
    await this.lessonRepository.delete(id);
  }
}
