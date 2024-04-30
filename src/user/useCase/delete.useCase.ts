import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaUserRepository } from "src/database/prisma/repository/prisma.user.repository";
import { UserRepository } from "../repository/user.repository";

@Injectable()
export class DeleteUserUseCase {
    constructor(
        @Inject(PrismaUserRepository) private userRepository: UserRepository
    ) {}

    async execute(id: string, role: string): Promise<void> {
        if (role !== 'ADMINISTRATOR') {
          throw new UnauthorizedException(
            'Only administrators can delete users',
          );
        }
        await this.userRepository.delete(id);
    }
}