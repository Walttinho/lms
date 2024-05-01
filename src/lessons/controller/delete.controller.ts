import { Controller, Delete, Param, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteLessonByIdUseCase } from '../useCase/delete.useCase';

@ApiTags('lessons')
@Controller('courses/:courseId/lessons')
export class DeleteLessonByIdController {
  constructor(private useCase: DeleteLessonByIdUseCase) {}
  @Delete(':id')
  async delete(
    @Req() req: Request,
    @Param('id') id: string,
    @Param('courseId') courseId: string,
  ) {
    const userRole = req['user'].role;
    await this.useCase.execute(id, courseId, userRole);
  }
}
