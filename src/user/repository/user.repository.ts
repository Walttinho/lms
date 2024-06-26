import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;

  abstract findByEmail(email: string): Promise<User>;

  abstract findByUsername(username: string): Promise<User>;

  abstract findAll(): Promise<User[]>;

  abstract findById(id: string): Promise<User>;

  abstract delete(id: string): Promise<void>;

  abstract update(user: User): Promise<void>;
}
