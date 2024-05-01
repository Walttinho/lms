import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLessonDto } from './create-lesson.dto';
import { IsOptional, IsString } from 'class-validator';
import { LessonRole } from '@prisma/client';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The name of the lesson' })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The description of the lesson' })
  description?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The content of the lesson' })
  content?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The role of the lesson' })
  role?: LessonRole;
}
