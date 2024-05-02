import { Controller, Delete, Param, Req } from '@nestjs/common';
import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteCourseByIdUseCase } from '../useCase/delete.useCase';

@ApiTags('courses')
@ApiBearerAuth()
@Controller('courses')
export class DeleteCourseByIdController {
  constructor(private useCase: DeleteCourseByIdUseCase) {}
  @ApiOperation({ summary: 'Delete course by id' })
  @ApiResponse({
    status: 204,
    description: 'The course has been successfully deleted.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @Delete(':id')
  async delete(@Req() req: Request, @Param('id') id: string) {
    const role = req['user'].role;
    await this.useCase.execute(id, role);
  }
}
