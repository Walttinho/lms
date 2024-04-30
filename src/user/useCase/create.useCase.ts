import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UserRepository } from '../../user/repository/user.repository';
import { User } from '../../user/entities/user.entity';
import { hash } from 'bcrypt';
import { PrismaUserRepository } from 'src/database/prisma/repository/prisma.user.repository';
import { UserRole } from '@prisma/client';

interface CreateUserRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(PrismaUserRepository) private userRepository: UserRepository,
  ) {}

  async execute({ name, username, email, password, role }: CreateUserRequest) {
    const userAlreadyExist =
      (await this.userRepository.findByEmail(email)) ||
      (await this.userRepository.findByUsername(username));

    if (userAlreadyExist)
      throw new ConflictException(
        'User already exists, username or email already in use',
      );

    if (!Object.values(UserRole).includes(role as UserRole)) {
      throw new BadRequestException(
        'Invalid role value. Please provide a valid value [ADMINISTRATOR | PROFESSOR | STUDENTS].',
      );
    }

    const user = new User({
      name,
      username,
      email,
      password: await hash(password, 10),
      role: role as User['role'],
    });

    await this.userRepository.create(user);

    return user;
  }
}
