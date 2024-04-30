import { Module } from '@nestjs/common';
import { UserController } from './controller/create.controller';
import { CreateUserUseCase } from './useCase/create.useCase';
import { DatabaseModule } from 'src/database/database.module';
import { FindAllUsersUseCase } from './useCase/findAll.useCase';
import { FindAllUserController } from './controller/findAll.controller';
import { FindUserByIdController } from './controller/findById.controller';
import { FindUserByIdUseCase } from './useCase/findById.useCase';


@Module({
  imports: [DatabaseModule],
  controllers: [UserController, FindAllUserController, FindUserByIdController],
  providers: [CreateUserUseCase, FindAllUsersUseCase, FindUserByIdUseCase],
})
export class UserModule {}
