import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repository/prisma.user.repository';
import { PrismaCourseRepository } from './prisma/repository/prisma.course.repository';

@Module({
  providers: [PrismaService, PrismaUserRepository, PrismaCourseRepository],
  exports: [PrismaUserRepository, PrismaCourseRepository],
})
export class DatabaseModule {}
