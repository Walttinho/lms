import { ApiProperty } from '@nestjs/swagger';
import { LessonRole } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLessonDto {
  @ApiProperty({ description: 'The name of the lesson' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The description of the lesson' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'The content of the lesson' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'The role of the lesson' })
  @IsString()
  @IsNotEmpty()
  role: LessonRole;
}
