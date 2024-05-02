import { Controller, Delete, Param, Req } from '@nestjs/common';
import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteLessonByIdUseCase } from '../useCase/delete.useCase';

@ApiTags('lessons')
@ApiBearerAuth()
@Controller('courses/:courseId/lessons')
export class DeleteLessonByIdController {
  constructor(private useCase: DeleteLessonByIdUseCase) {}
  @ApiOperation({ summary: 'Delete lesson' })
  @ApiResponse({
    status: 204,
    description: 'The lesson has been successfully deleted.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({
    status: 404,
    description: 'Lesson not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
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
