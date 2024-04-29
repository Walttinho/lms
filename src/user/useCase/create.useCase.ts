import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../user/repository/user.repository';
import { User } from '../../user/entities/user.entity';
import { hash } from 'bcrypt';
import { PrismaUserRepository } from 'src/database/prisma/repository/prisma.user.repository';

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
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) throw new ConflictException('User already exists');

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
