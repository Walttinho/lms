import { viewModelLesson } from 'src/lessons/viewModelLesson';
import { Course } from './entities/course.entity';

export class viewModelCourse {
  static toHttp({ id, name, description, banner, updatedAt, lessons }: Course) {
    return {
      id,
      name,
      description,
      banner,
      updatedAt,
      lessons: lessons?.map((lesson) => viewModelLesson.toHttp(lesson)),
    };
  }
}
