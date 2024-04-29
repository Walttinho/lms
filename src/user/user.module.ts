import { Module } from '@nestjs/common';
import { UserController } from './controller/create.controller';
import { CreateUserUseCase } from './useCase/create.useCase';
import { DatabaseModule } from 'src/database/database.module';
import { FindAllUsersUseCase } from './useCase/findAll.useCase';
import { FindAllUserController } from './controller/findAll.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [UserController, FindAllUserController],
  providers: [CreateUserUseCase, FindAllUsersUseCase], 
})
export class UserModule {}
