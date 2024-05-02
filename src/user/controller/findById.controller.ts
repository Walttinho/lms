import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Req } from '@nestjs/common';
import { FindUserByIdUseCase } from '../useCase/findById.useCase';
import { ViewModelUser } from '../viewModelUser';
import { Request } from 'express';

@ApiTags('users')
@ApiBearerAuth()
@Controller('user')
export class FindUserByIdController {
  constructor(private useCase: FindUserByIdUseCase) {}

  @Get()
  @ApiOperation({ summary: 'Find user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully retrieved.',
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
  async findById(@Req() req: Request) {
    const userId = req['user'].id;

    const user = await this.useCase.execute(userId);
    return ViewModelUser.toHttp(user);
  }
}
