import { Module } from '@nestjs/common';
import { UserController } from './controller/create.controller';
import { CreateUserUseCase } from './useCase/create.useCase';
import { DatabaseModule } from 'src/database/database.module';
import { FindAllUsersUseCase } from './useCase/findAll.useCase';
import { FindAllUserController } from './controller/findAll.controller';
import { FindUserByIdController } from './controller/findById.controller';
import { FindUserByIdUseCase } from './useCase/findById.useCase';
import { DeleteUserController } from './controller/delete.controller';
import { DeleteUserUseCase } from './useCase/delete.useCase';


@Module({
  imports: [DatabaseModule],
  controllers: [
    UserController,
    FindAllUserController,
    FindUserByIdController,
    DeleteUserController,
  ],
  providers: [
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserByIdUseCase,
    DeleteUserUseCase,
  ],
})
export class UserModule {}
