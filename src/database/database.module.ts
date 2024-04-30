import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repository/prisma.user.repository';
import { PrismaCourseRepository } from './prisma/repository/prisma.course.repository';
import { PrismaLessonRepository } from './prisma/repository/prisma.lesson.repository';

@Module({
  providers: [
    PrismaService,
    PrismaUserRepository,
    PrismaCourseRepository,
    PrismaLessonRepository,
  ],
  exports: [
    PrismaUserRepository,
    PrismaCourseRepository,
    PrismaLessonRepository,
  ],
})
export class DatabaseModule {}
