import { User } from './entities/user.entity';

export class ViewModelUser {
  static toHttp({ id, name, username, email, role }: User) {
    return {
      id,
      name,
      username,
      email,
      role,
    };
  }
}
