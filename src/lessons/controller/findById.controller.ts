import { Controller, Get, Param, Req } from '@nestjs/common';
import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { viewModelLesson } from '../viewModelLesson';
import { FindLessonByIdUseCase } from '../useCase/findById.useCase';

@ApiTags('lessons')
@ApiBearerAuth()
@Controller('courses/:courseId/lessons')
export class FindLessonByIdController {
  constructor(private useCase: FindLessonByIdUseCase) {}

  @Get(':id')
  @ApiOperation({ summary: 'Find lesson by ID' })
  @ApiResponse({
    status: 200,
    description: 'The lesson has been successfully retrieved.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({ status: 404, description: 'Lesson not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async findById(
    @Req() req: Request,
    @Param('id') id: string,
    @Param('courseId') courseId: string,
  ) {
    const userReq = req['user'];

    const lesson = await this.useCase.execute(id, courseId, userReq);
    return viewModelLesson.toHttp(lesson);
  }
}
