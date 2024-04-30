import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { CourseRepository } from '../repository/course.repository';
import { Course } from '../entities/course.entity';

@Injectable()
export class FindCourseByIdUseCase {
  constructor(
    @Inject(PrismaCourseRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(id: string): Promise<Course> {
    const course = await this.courseRepository.findById(id);
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }
}
