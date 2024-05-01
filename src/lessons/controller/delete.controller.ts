import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteLessonByIdUseCase } from '../useCase/delete.useCase';

@ApiTags('lessons')
@Controller('courses/:courseId/lessons')
export class DeleteLessonByIdController {
  constructor(private useCase: DeleteLessonByIdUseCase) {}
  @Delete(':id')
  async delete(@Param('id') id: string, @Param('courseId') courseId: string) {
    await this.useCase.execute(id, courseId);
  }
}
