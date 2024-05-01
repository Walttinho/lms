import { Injectable } from '@nestjs/common';
import { CourseRepository } from 'src/courses/repository/course.repository';
import { PrismaService } from '../prisma.service';
import { Course } from 'src/courses/entities/course.entity';
import { PrismaCourseMapper } from '../mappers/prisma.course.mapper';
import { PrismaLessonMapper } from '../mappers/prisma.lesson.mapper';

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
      include: {
        lessons: true,
      },
    });

    const result = coursesRaw.map((courseRaw) => {
      const lessons = courseRaw.lessons.map(PrismaLessonMapper.toDomain);
      const course = PrismaCourseMapper.toDomain(courseRaw);
      course.lessons = lessons;
      return course;
    });

    return result;
  }

  async findById(id: string): Promise<Course | null> {
    const courseRaw = await this.prisma.course.findUnique({
      where: {
        id,
      },
      include: {
        lessons: true,
      },
    });

    if (!courseRaw) return null;

    const lessons = courseRaw.lessons.map(PrismaLessonMapper.toDomain);

    const course = PrismaCourseMapper.toDomain(courseRaw);

    course.lessons = lessons;

    return course;
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
