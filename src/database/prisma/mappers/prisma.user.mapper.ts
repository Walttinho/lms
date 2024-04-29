import { User } from 'src/user/entities/user.entity';
import { User as UserRaw, UserRole } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User): UserRaw {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role as UserRole,
      createdAt: user.createdAt,
      updatedAt: new Date(),
    };
  }

  static toDomain(userRaw: UserRaw): User {
    return new User({
      name: userRaw.name,
      username: userRaw.username,
      email: userRaw.email,
      password: userRaw.password,
      role: userRaw.role as UserRole,
      createdAt: userRaw.createdAt,
    });
  }
}
