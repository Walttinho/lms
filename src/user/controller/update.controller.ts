import { Body, Controller, Patch, Req } from '@nestjs/common';
import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateUserUseCase } from '../useCase/update.useCase';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ViewModelUser } from '../viewModelUser';

@ApiTags('users')
@ApiBearerAuth()
@Controller('user')
export class UpdateUserController {
  constructor(private useCase: UpdateUserUseCase) {}

  @Patch()
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
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
    status: 409,
    description: 'Conflict.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    const { id } = req['user'];
    const result = await this.useCase.execute(id, updateUserDto);
    return ViewModelUser.toHttp(result);
  }
}
