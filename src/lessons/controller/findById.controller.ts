import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { viewModelLesson } from '../viewModelLesson';
import { FindLessonByIdUseCase } from '../useCase/findById.useCase';


@ApiTags('lessons')
@Controller('courses/:courseId/lessons')
export class FindLessonByIdController {
  constructor(private useCase: FindLessonByIdUseCase) {}

  @Get()
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
  async findById(@Param('id') id: string) {
    const lesson = await this.useCase.execute(id);
    return viewModelLesson.toHttp(lesson);
  }
}
