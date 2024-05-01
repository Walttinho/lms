import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCourseUseCase } from '../useCase/create.useCase';
import { Course } from '../entities/course.entity';
import { viewModelCourse } from '../viewModelCourse';

@ApiTags('courses')
@Controller('courses')
export class CreateCoursesController {
  constructor(private useCase: CreateCourseUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a new course' })
  @ApiBody({ type: Course })
  @ApiResponse({
    status: 201,
    description: 'The course has been successfully created.',
  })
  async create(@Body() course: Course) {
    const result = await this.useCase.execute(course);
    return viewModelCourse.toHttp(result);
  }
}
