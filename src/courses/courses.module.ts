import { Module } from '@nestjs/common';
import { CreateCoursesController } from './controller/courses.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CreateCourseUseCase } from './useCase/create.useCase';
import { FindAllCoursesController } from './controller/findAll.controller';
import { FindAllCoursesUseCase } from './useCase/findAll.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateCoursesController, FindAllCoursesController],
  providers: [CreateCourseUseCase, FindAllCoursesUseCase],
})
export class CoursesModule {}
