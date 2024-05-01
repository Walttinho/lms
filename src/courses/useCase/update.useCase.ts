import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { CourseRepository } from '../repository/course.repository';

import { UpdateCourseDto } from '../dto/update-course.dto';
import { Course } from '../entities/course.entity';

@Injectable()
export class UpdateCourseUseCase {
  constructor(
    @Inject(PrismaCourseRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(
    id: string,
    role: string,
    updateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    if (role === 'STUDENTS') {
      throw new UnauthorizedException(
        'Only administrators and teachers can update courses',
      );
    }
    const Course = await this.courseRepository.findById(id);
    if (!Course) throw new NotFoundException('Course not found');

    if (updateCourseDto.name) Course.name = updateCourseDto.name;

    if (updateCourseDto.description)
      Course.description = updateCourseDto.description;

    if (updateCourseDto.banner) Course.banner = updateCourseDto.banner;

    await this.courseRepository.update(Course);

    return Course;
  }
}
