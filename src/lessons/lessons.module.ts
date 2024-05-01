import { Module } from '@nestjs/common';
import { CreateLessonsController } from './controller/create.controller';
import { CreateLessonUseCase } from './useCase/create.useCase';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateLessonsController],
  providers: [CreateLessonUseCase],
})
export class LessonsModule {}
