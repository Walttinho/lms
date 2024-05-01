import { Lesson } from '../entities/lesson.entity';

export abstract class LessonRepository {
  abstract create(lesson: Lesson): Promise<void>;
  abstract findById(id: string): Promise<Lesson | null>;
}
