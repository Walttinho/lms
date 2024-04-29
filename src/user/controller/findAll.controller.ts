import { Controller, Get, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ViewModelUser } from '../viewModelUser';
import { FindAllUsersUseCase } from '../useCase/findAll.useCase';

@ApiTags('users')
@Controller('user')
export class FindAllUserController {
  constructor(private useCase: FindAllUsersUseCase) {}

  @Get('all')
  @ApiOperation({ summary: 'Find all users' })
  @ApiResponse({
    status: 200,
    description: 'The list of users has been successfully retrieved.',
  })
  async findAll(@Req() req: Request) {
    const role = req['user'].role;
    const users = await this.useCase.execute(role);
    return users.map(ViewModelUser.toHttp);
  }
}
