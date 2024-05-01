import { Controller, Patch, Param, Body, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateLessonDto } from '../dto/update-lesson.dto';
import { UpdateLessonByIdUseCase } from '../useCase/update.useCase';

@ApiTags('lessons')
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
