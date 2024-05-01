import { Body, Controller, Param, Post, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLessonUseCase } from '../useCase/create.useCase';
import { Lesson } from '../entities/lesson.entity';
import { viewModelLesson } from '../viewModelLesson';

@ApiTags('lessons')
@Controller('courses/:courseId/lessons')
export class CreateLessonsController {
  constructor(private useCase: CreateLessonUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a new lesson' })
  @ApiBody({ type: Lesson })
  @ApiResponse({
    status: 201,
    description: 'The lesson has been successfully created.',
  })
  async create(
    @Req() req: Request,
    @Param('courseId') courseId: string,
    @Body() lesson: Lesson,
  ) {
    /* req['user'] { id: '59f501ef-7373-47a3-a14e-26ad0bdcda7c', role: 'ADMINISTRATOR' }
req.body {
  name: 'Lição de Texto 1',
  description: 'Esta é uma lição de texto',
  content: 'Este é o conteúdo da lição de texto 1.',
  role: 'TEXT' */

    const roleUser = req['user'].role;
    const { name, description, content, role } = lesson;

    const result = await this.useCase.execute(roleUser, {
      courseId,
      name,
      description,
      content,
      role,
    });
    return viewModelLesson.toHttp(result);
  }
}
