import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { PrismaUserRepository } from 'src/database/prisma/repository/prisma.user.repository';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject(PrismaUserRepository) private userRepository: UserRepository,
  ) {}

  async execute(id: string, updateUserDto: UpdateUserDto): Promise<User> {
   
    const user = await this.userRepository.findById(id)

    if(updateUserDto.name) user.name = updateUserDto.name

    if(updateUserDto.email) {
    const userAlreadyExist = await this.userRepository.findByEmail(updateUserDto.email);
    console.log(userAlreadyExist)
    if (userAlreadyExist && userAlreadyExist.id !== id)
      throw new ConflictException('This email is already in use');

      user.email = updateUserDto.email
    }

    if (updateUserDto.password) {
      user.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    await this.userRepository.update(user)

    return user
  
    
  }
}
