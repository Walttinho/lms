import { Injectable } from '@nestjs/common';
import { LessonRepository } from 'src/lessons/repository/lesson.repository';
import { PrismaService } from '../prisma.service';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { PrismaLessonMapper } from '../mappers/prisma.lesson.mapper';
@Injectable()
export class PrismaLessonRepository implements LessonRepository {
  constructor(private prisma: PrismaService) {}

  async create(lesson: Lesson): Promise<void> {
    const lessonRaw = PrismaLessonMapper.toPrisma(lesson);
    await this.prisma.lessons.create({
      data: lessonRaw,
    });
  }

  async findById(id: string): Promise<Lesson | null> {
    const lesson = await this.prisma.lessons.findUnique({
      where: {
        id,
      },
    });
    if (!lesson) return null;
    return PrismaLessonMapper.toDomain(lesson);
  }
  async findAll(
    courseId: string,
    skip: number,
    take: number,
  ): Promise<Lesson[]> {
    const lessons = await this.prisma.lessons.findMany({
      where: {
        courseId: courseId,
      },
      skip,
      take,
    });
    return lessons.map((lesson) => PrismaLessonMapper.toDomain(lesson));
  }

  async delete(id: string): Promise<void> {
    await this.prisma.lessons.delete({
      where: {
        id,
      },
    });
  }
}
