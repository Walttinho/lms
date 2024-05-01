import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { viewModelCourse } from '../viewModelCourse';
import { FindCourseByIdUseCase } from '../useCase/findById.useCase';

@ApiTags('courses')
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
  async findById(@Param('id') id: string) {
    const course = await this.useCase.execute(id);
    return viewModelCourse.toHttp(course);
  }
}
