import { Body, Controller, Param, Patch, Req } from '@nestjs/common';
import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateCourseUseCase } from '../useCase/update.useCase';
import { viewModelCourse } from '../viewModelCourse';
import { UpdateCourseDto } from '../dto/update-course.dto';

@ApiTags('courses')
@ApiBearerAuth()
@Controller('courses')
export class UpdateCourseByIdController {
  constructor(private useCase: UpdateCourseUseCase) {}

  @Patch(':id')
  @ApiOperation({ summary: 'Update course' })
  @ApiResponse({
    status: 200,
    description: 'The course has been successfully updated.',
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
  async update(
    @Req() req: Request,
    @Body() updateCourseDto: UpdateCourseDto,
    @Param('id') id: string,
  ) {
    const { role } = req['user'];
    const result = await this.useCase.execute(id, role, updateCourseDto);
    return viewModelCourse.toHttp(result);
  }
}
