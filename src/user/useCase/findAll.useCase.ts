import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaUserRepository } from 'src/database/prisma/repository/prisma.user.repository';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @Inject(PrismaUserRepository) private userRepository: UserRepository,
  ) {}

  async execute(role) {
    if (role !== 'ADMINISTRATOR') {
      throw new UnauthorizedException('Only administrators can see all users');
    }
    const users = await this.userRepository.findAll();
    return users;
  }
}
