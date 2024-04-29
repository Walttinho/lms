import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { CreateUserUseCase } from './useCase/create.useCase';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ViewModelUser } from './viewModelUser';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private useCase: CreateUserUseCase) {}
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.useCase.execute(createUserDto);

    return ViewModelUser.toHttp(user);
  }
}
