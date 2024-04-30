import { Injectable } from '@nestjs/common';
import { CourseRepository } from 'src/courses/repository/course.repository';
import { PrismaService } from '../prisma.service';
import { Course } from 'src/courses/entities/course.entity';
import { PrismaCourseMapper } from '../mappers/prisma.course.mapper';

@Injectable()
export class PrismaCourseRepository implements CourseRepository {
  constructor(private prisma: PrismaService) {}

  async create(course: Course): Promise<void> {
    const courseRaw = PrismaCourseMapper.toPrisma(course);
    await this.prisma.course.create({
      data: courseRaw,
    });
  }

  async findAll(skip: number, take: number): Promise<Course[]> {
    const coursesRaw = await this.prisma.course.findMany({
      skip: skip,
      take: take,
    });

    return coursesRaw.map(PrismaCourseMapper.toDomain);
  }

  async findById(id: string): Promise<Course | null> {
    const courseRaw = await this.prisma.course.findUnique({
      where: {
        id,
      },
    });

    if (!courseRaw) return null;

    return PrismaCourseMapper.toDomain(courseRaw);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.course.delete({
      where: {
        id,
      },
    });
  }

  async update(course: Course): Promise<void> {
    const courseRaw = PrismaCourseMapper.toPrisma(course);
    await this.prisma.course.update({
      where: {
        id: courseRaw.id,
      },
      data: courseRaw,
    });
  }
}
