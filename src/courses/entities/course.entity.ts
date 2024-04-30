import { randomUUID } from 'crypto';
import { Replace } from 'src/utils/replace';

interface CourseSchema {
  name: string;
  description: string;
  banner: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Course {
  private props: CourseSchema;
  private _id: string;

  constructor(props: Replace<CourseSchema, { createdAt?: Date }>, id?: string) {
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

  get banner() {
    return this.props.banner;
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

  set banner(banner: string) {
    this.props.banner = banner;
  }
}
