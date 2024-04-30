import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Course name' })
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Course description' })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Course banner' })
  banner?: string;
}
