import { Module } from '@nestjs/common';
import { CreateCoursesController } from './controller/courses.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CreateCourseUseCase } from './useCase/create.useCase';
import { FindAllCoursesController } from './controller/findAll.controller';
import { FindAllCoursesUseCase } from './useCase/findAll.useCase';
import { FindCourseByIdController } from 'src/courses/controller/findById.controller';
import { FindCourseByIdUseCase } from './useCase/findById.useCase';
import { DeleteCourseByIdController } from './controller/delete.controller';
import { DeleteCourseByIdUseCase } from './useCase/delete.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateCoursesController,
    FindAllCoursesController,
    FindCourseByIdController,
    DeleteCourseByIdController,
  ],
  providers: [
    CreateCourseUseCase,
    FindAllCoursesUseCase,
    FindCourseByIdUseCase,
    DeleteCourseByIdUseCase,
  ],
})
export class CoursesModule {}
