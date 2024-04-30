import { LessonRole } from '@prisma/client';
import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface LessonSchema {
  name: string;
  description: string;
  content: string;
  role: LessonRole;
  courseId: string;
  createdAt: Date;
  updatedAt?: Date;
}
export class Lesson {
  private props: LessonSchema;
  private _id: string;
  constructor(props: Replace<LessonSchema, { createdAt?: Date }>, id?: string) {
    this.props = {
      ...props,
      createdAt: new Date(),
    };
    this._id = id || randomUUID();
  }
  get id() {
    return this._id;
  }
  get name() {
    return this.props.name;
  }
  get description() {
    return this.props.description;
  }
  get content() {
    return this.props.content;
  }
  get role() {
    return this.props.role;
  }
  get courseId() {
    return this.props.courseId;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  set name(name: string) {
    this.props.name = name;
  }
  set description(description: string) {
    this.props.description = description;
  }
  set content(content: string) {
    this.props.content = content;
  }
  set role(role: LessonRole) {
    this.props.role = role;
  }
  set courseId(courseId: string) {
    this.props.courseId = courseId;
  }
}
