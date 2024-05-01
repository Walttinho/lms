import { Body, Controller, Param, Patch, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateCourseUseCase } from '../useCase/update.useCase';
import { viewModelCourse } from '../viewModelCourse';
import { UpdateCourseDto } from '../dto/update-course.dto';

@ApiTags('courses')
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
