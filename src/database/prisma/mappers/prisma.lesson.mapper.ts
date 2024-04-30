import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Lessons as LessonRaw } from '@prisma/client';
export class PrismaLessonMapper {
  static toPrisma(lesson: Lesson): LessonRaw {
    return {
      id: lesson.id,
      name: lesson.name,
      description: lesson.description,
      content: lesson.content,
      role: lesson.role,
      courseId: lesson.courseId,
      createdAt: lesson.createdAt,
      updatedAt: new Date(),
    };
  }

  static toDomain(lessonRaw: LessonRaw): Lesson {
    return new Lesson(
      {
        name: lessonRaw.name,
        description: lessonRaw.description,
        content: lessonRaw.content,
        role: lessonRaw.role,
        courseId: lessonRaw.courseId,
        createdAt: lessonRaw.createdAt,
      },
      lessonRaw.id,
    );
  }
}
