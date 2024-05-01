import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaLessonRepository } from 'src/database/prisma/repository/prisma.lesson.repository';
import { Lesson } from '../entities/lesson.entity';
import { LessonRepository } from '../repository/lesson.repository';

@Injectable()
export class FindLessonByIdUseCase {
  constructor(
    @Inject(PrismaLessonRepository) private lessonRepository: LessonRepository,
  ) {}

  async execute(id: string): Promise<Lesson> {
    const lesson = await this.lessonRepository.findById(id);
    if (!lesson) throw new NotFoundException('Lesson not found');
    return lesson;
  }
}
