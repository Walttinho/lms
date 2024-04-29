import { Inject, Injectable } from '@nestjs/common';
import { PrismaUserRepository } from 'src/database/prisma/repository/prisma.user.repository';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @Inject(PrismaUserRepository) private userRepository: UserRepository,
  ) {}

  async execute() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
