import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/repository/prisma.user.repository';

@Module({
  providers: [PrismaService, PrismaUserRepository],
  exports: [PrismaUserRepository],
})
export class DatabaseModule {}
