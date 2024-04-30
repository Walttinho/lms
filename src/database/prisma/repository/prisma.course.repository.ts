import { Injectable } from "@nestjs/common";
import { CourseRepository } from "src/courses/repository/course.repository";
import { PrismaService } from "../prisma.service";
import { Course } from "src/courses/entities/course.entity";
import { PrismaCourseMapper } from "../mappers/prisma.course.mapper";

@Injectable()

export class PrismaCourseRepository implements CourseRepository {

    constructor(private prisma: PrismaService) {}

    async create (course: Course): Promise<void> {
        const courseRaw = PrismaCourseMapper.toPrisma(course);
        await this.prisma.course.create({
            data: courseRaw
        })
    }
}