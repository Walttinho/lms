import { Module } from '@nestjs/common';
import {  CreateCoursesController } from './controller/courses.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CreateCourseUseCase } from './useCase/create.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateCoursesController],
  providers: [CreateCourseUseCase],
})
export class CoursesModule {}
