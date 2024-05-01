import { Lesson } from './entities/lesson.entity';

export class viewModelLesson {
  static toHttp({ id, name, description, content, role, courseId }: Lesson) {
    return {
      id,
      name,
      description,
      content,
      role,
      courseId,
    };
  }
}
