import { Controller, Delete, Param, Req } from '@nestjs/common';
import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteUserUseCase } from '../useCase/delete.useCase';

@ApiTags('users')
@ApiBearerAuth()
@Controller('user')
export class DeleteUserController {
  constructor(private useCase: DeleteUserUseCase) {}
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({
    status: 204,
    description: 'The user has been successfully deleted.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Delete(':id')
  async delete(@Req() req: Request, @Param('id') id: string) {
    const role = req['user'].role;
    await this.useCase.execute(id, role);
  }
}
