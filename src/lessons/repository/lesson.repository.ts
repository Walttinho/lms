import { Lesson } from '../entities/lesson.entity';

export abstract class LessonRepository {
  abstract create(lesson: Lesson): Promise<void>;
  abstract findById(id: string): Promise<Lesson | null>;
  abstract findAllByCourse(
    courseId: string,
    skip: number,
    take: number,
  ): Promise<Lesson[]>;
  abstract delete(id: string): Promise<void>;
  abstract update(lesson: Lesson): Promise<void>;
  abstract updateWatching(lessonId: string, userId: string): Promise<void>;
}
