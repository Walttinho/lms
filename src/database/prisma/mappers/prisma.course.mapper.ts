import { Course } from 'src/courses/entities/course.entity';
import { Course as CourseRaw } from '@prisma/client';
export class PrismaCourseMapper {
  static toPrisma(course: Course): CourseRaw {
    return {
      id: course.id,
      name: course.name,
      description: course.description,
      banner: course.banner,
      createdAt: course.createdAt,
      updatedAt: new Date(),
    };
  }

  static toDomain(courseRaw: CourseRaw): Course {
    return new Course(
      {
        name: courseRaw.name,
        description: courseRaw.description,
        banner: courseRaw.banner,
        createdAt: courseRaw.createdAt,
      },
      courseRaw.id,
    );
  }
}
