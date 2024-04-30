import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({ description: 'The username of the user', required: false })
  username?: string;

  @ApiProperty({ description: 'The email of the user', required: false })
  email?: string;

  @ApiProperty({ description: 'The password of the user', required: true })
  password: string;
}
