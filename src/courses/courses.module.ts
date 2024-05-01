import { Module } from '@nestjs/common';
import { CreateCoursesController } from './controller/create.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CreateCourseUseCase } from './useCase/create.useCase';
import { FindAllCoursesController } from './controller/findAll.controller';
import { FindAllCoursesUseCase } from './useCase/findAll.useCase';
import { FindCourseByIdController } from 'src/courses/controller/findById.controller';
import { FindCourseByIdUseCase } from './useCase/findById.useCase';
import { DeleteCourseByIdController } from './controller/delete.controller';
import { DeleteCourseByIdUseCase } from './useCase/delete.useCase';
import { UpdateCourseUseCase } from './useCase/update.useCase';
import { UpdateCourseByIdController } from './controller/update.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateCoursesController,
    FindAllCoursesController,
    FindCourseByIdController,
    DeleteCourseByIdController,
    UpdateCourseByIdController,
  ],
  providers: [
    CreateCourseUseCase,
    FindAllCoursesUseCase,
    FindCourseByIdUseCase,
    DeleteCourseByIdUseCase,
    UpdateCourseUseCase,
  ],
})
export class CoursesModule {}
