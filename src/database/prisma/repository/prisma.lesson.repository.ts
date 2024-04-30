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
}
