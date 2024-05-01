import { Module } from '@nestjs/common';
import { CreateLessonsController } from './controller/create.controller';
import { CreateLessonUseCase } from './useCase/create.useCase';
import { DatabaseModule } from 'src/database/database.module';
import { FindLessonByIdController } from './controller/findById.controller';
import { FindLessonByIdUseCase } from './useCase/findById.useCase';
import { FindAllLessonsByCourseController } from './controller/findAllByCourse.controller';
import { FindAllLessonsByCourseUseCase } from './useCase/findAllByCourse.useCase';
import { DeleteLessonByIdController } from './controller/delete.controller';
import { DeleteLessonByIdUseCase } from './useCase/delete.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateLessonsController,
    FindLessonByIdController,
    FindAllLessonsByCourseController,
    DeleteLessonByIdController,
  ],
  providers: [
    CreateLessonUseCase,
    FindLessonByIdUseCase,
    FindAllLessonsByCourseUseCase,
    DeleteLessonByIdUseCase,
  ],
})
export class LessonsModule {}
