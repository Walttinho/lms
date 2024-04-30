import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Course name' })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Course description' })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Course banner' })
    banner: string;
}
