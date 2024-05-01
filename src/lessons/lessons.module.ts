import { Module } from '@nestjs/common';
import { CreateLessonsController } from './controller/create.controller';
import { CreateLessonUseCase } from './useCase/create.useCase';
import { DatabaseModule } from 'src/database/database.module';
import { FindLessonByIdController } from './controller/findById.controller';
import { FindLessonByIdUseCase } from './useCase/findById.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateLessonsController, FindLessonByIdController],
  providers: [CreateLessonUseCase, FindLessonByIdUseCase],
})
export class LessonsModule {}
