import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from '../repository/course.repository';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { Course } from '../entities/course.entity';

@Injectable()
export class FindAllCoursesUseCase {
  constructor(
    @Inject(PrismaCourseRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(page: number, size: number): Promise<Course[]> {
    const skip = (page - 1) * size;
    const courses = await this.courseRepository.findAll(skip, size);
    if (!courses || courses.length === 0) {
      throw new NotFoundException('Courses not found');
    }

    return courses;
  }
}
