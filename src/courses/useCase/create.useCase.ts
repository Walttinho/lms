import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { Course } from '../entities/course.entity';
import { CourseRepository } from '../repository/course.repository';

@Injectable()
export class CreateCourseUseCase {
  constructor(
    @Inject(PrismaCourseRepository)
    private courseRepository: CourseRepository,
  ) {}

  async execute({ name, description, banner }): Promise<Course> {
    if (!name) {
      throw new BadRequestException('Name is required');
    }

    if (!description) {
      throw new BadRequestException('Description is required');
    }

    if (!banner) {
      throw new BadRequestException('Banner is required');
    }

    const course = new Course({
      name,
      description,
      banner,
    });
    await this.courseRepository.create(course);

    return course;
  }
}
