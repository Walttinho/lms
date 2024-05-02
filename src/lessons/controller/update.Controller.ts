import { Controller, Patch, Param, Body, Req } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateLessonDto } from '../dto/update-lesson.dto';
import { UpdateLessonByIdUseCase } from '../useCase/update.useCase';

@ApiTags('lessons')
@ApiBearerAuth()
@Controller('courses/:courseId/lessons')
export class UpdateLessonByIdController {
  constructor(private useCase: UpdateLessonByIdUseCase) {}

  @Patch(':id')
  @ApiOperation({ summary: 'Update a lesson' })
  @ApiBody({ type: UpdateLessonDto })
  @ApiResponse({
    status: 200,
    description: 'The lesson has been successfully updated.',
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
  async update(
    @Req() req: Request,
    @Param('courseId') courseId: string,
    @Param('id') lessonId: string,
    @Body() updateLessonDto: UpdateLessonDto,
  ) {
    const userRole = req['user'].role;

    const updatedLesson = await this.useCase.execute(
      courseId,
      lessonId,
      userRole,
      updateLessonDto,
    );

    return updatedLesson;
  }
}
