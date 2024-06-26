import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiQuery,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { viewModelLesson } from '../viewModelLesson';
import { FindAllLessonsByCourseUseCase } from '../useCase/findAllByCourse.useCase';

@ApiTags('lessons')
@ApiBearerAuth()
@Controller('courses/:courseId/lessons')
export class FindAllLessonsByCourseController {
  constructor(private useCase: FindAllLessonsByCourseUseCase) {}

  @Get()
  @ApiOperation({ summary: 'Find all lessons' })
  @ApiResponse({ status: 200, type: [viewModelLesson] })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  @ApiQuery({
    name: 'size',
    required: false,
    type: Number,
    description: 'Number of items per page',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  async findAll(
    @Query('page') page: number = 1,
    @Query('size') size: number = 10,
    @Param('courseId') courseId: string,
  ) {
    const result = await this.useCase.execute(courseId, +page, +size);
    return result.map(viewModelLesson.toHttp);
  }
}
