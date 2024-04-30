import { Controller, Delete, Param, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteUserUseCase } from '../useCase/delete.useCase';

@ApiTags('users')
@Controller('user')
export class DeleteUserController {
  constructor(private useCase: DeleteUserUseCase) {}

  @Delete(':id')
  async delete(@Req() req: Request, @Param('id') id: string) {
    const role = req['user'].role;
    await this.useCase.execute(id, role);
  }
}
