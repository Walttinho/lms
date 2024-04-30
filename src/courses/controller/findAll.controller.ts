// src/courses/controller/findAll.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { FindAllCoursesUseCase } from '../useCase/findAll.useCase';
import { viewModelCourse } from '../viewModelCourse';

@ApiTags('courses')
@Controller('courses')
export class FindAllCoursesController {
  constructor(private useCase: FindAllCoursesUseCase) {}

  @Get()
  @ApiOperation({ summary: 'Find all courses' })
  @ApiResponse({
    status: 200,
    description: 'The list of courses has been successfully retrieved.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiQuery({
    name: 'size',
    required: false,
    type: Number,
    description: 'Number of items per page',
  })
  async findAll(
    @Query('page') page: number = 1,
    @Query('size') size: number = 10,
  ) {
    const courses = await this.useCase.execute(+page, +size);
    return courses.map(viewModelCourse.toHttp);
  }
}
