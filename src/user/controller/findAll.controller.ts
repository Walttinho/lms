import { Controller, Get, Req } from '@nestjs/common';
import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ViewModelUser } from '../viewModelUser';
import { FindAllUsersUseCase } from '../useCase/findAll.useCase';

@ApiTags('users')
@ApiBearerAuth()
@Controller('user')
export class FindAllUserController {
  constructor(private useCase: FindAllUsersUseCase) {}

  @Get('all')
  @ApiOperation({ summary: 'Find all users' })
  @ApiResponse({
    status: 200,
    description: 'The list of users has been successfully retrieved.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async findAll(@Req() req: Request) {
    const role = req['user'].role;
    const users = await this.useCase.execute(role);
    return users.map(ViewModelUser.toHttp);
  }
}
