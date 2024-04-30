import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entities/user.entity';
import { PrismaUserRepository } from 'src/database/prisma/repository/prisma.user.repository';

@Injectable()
export class FindUserByIdUseCase {
  constructor(
    @Inject(PrismaUserRepository) private userRepository: UserRepository,
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);
    return user;
  }
}
