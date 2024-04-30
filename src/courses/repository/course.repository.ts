import { Course } from '../entities/course.entity';

export abstract class CourseRepository {
  abstract create(course: Course): Promise<void>;
  abstract findAll(skip: number, take: number): Promise<Course[]>;
  abstract findById(id: string): Promise<Course | null>;
  abstract delete(id: string): Promise<void>;
}
