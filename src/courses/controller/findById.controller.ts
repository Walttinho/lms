import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { viewModelCourse } from '../viewModelCourse';
import { FindCourseByIdUseCase } from '../useCase/findById.useCase';

@ApiTags('courses')
@ApiBearerAuth()
@Controller('courses')
export class FindCourseByIdController {
  constructor(private useCase: FindCourseByIdUseCase) {}

  @Get(':id')
  @ApiOperation({ summary: 'Find course by ID' })
  @ApiResponse({
    status: 200,
    description: 'The course has been successfully retrieved.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({
    status: 404,
    description: 'Course not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async findById(@Param('id') id: string) {
    const course = await this.useCase.execute(id);
    return viewModelCourse.toHttp(course);
  }
}
