import { Module } from '@nestjs/common';
import { CreateLessonsController } from './controller/create.controller';
import { CreateLessonUseCase } from './useCase/create.useCase';
import { DatabaseModule } from 'src/database/database.module';
import { FindLessonByIdController } from './controller/findById.controller';
import { FindLessonByIdUseCase } from './useCase/findById.useCase';
import { FindAllLessonsController } from './controller/findAll.controller';
import { FindAllLessonsUseCase } from './useCase/findAll.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateLessonsController,
    FindLessonByIdController,
    FindAllLessonsController,
  ],
  providers: [
    CreateLessonUseCase,
    FindLessonByIdUseCase,
    FindAllLessonsUseCase,
  ],
})
export class LessonsModule {}
