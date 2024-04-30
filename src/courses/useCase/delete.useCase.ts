import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaCourseRepository } from 'src/database/prisma/repository/prisma.course.repository';
import { CourseRepository } from '../repository/course.repository';

@Injectable()
export class DeleteCourseByIdUseCase {
  constructor(
    @Inject(PrismaCourseRepository) private courseRepository: CourseRepository,
  ) {}

  async execute(id: string, role: string): Promise<void> {
    if (role === 'STUDENTS') {
      throw new UnauthorizedException('Only administrators can delete courses');
    }
    const courseExists = await this.courseRepository.findById(id);
    if (!courseExists) throw new NotFoundException('Course not found');

    await this.courseRepository.delete(id);
  }
}
