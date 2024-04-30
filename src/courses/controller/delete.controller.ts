import { Controller, Delete, Param, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteCourseByIdUseCase } from '../useCase/delete.useCase';

@ApiTags('courses')
@Controller('courses')
export class DeleteCourseByIdController {
  constructor(private useCase: DeleteCourseByIdUseCase) {}

  @Delete(':id')
  async delete(@Req() req: Request, @Param('id') id: string) {
    const role = req['user'].role;
    await this.useCase.execute(id, role);
  }
}
