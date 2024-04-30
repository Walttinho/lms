import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/repository/user.repository';
import * as bcrypt from 'bcrypt';
import { PrismaUserRepository } from 'src/database/prisma/repository/prisma.user.repository';
import { identity } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(PrismaUserRepository) private userRepository: UserRepository,
  ) {}

  async login(loginAuthDto: LoginAuthDto) {
    const { email, username, password } = loginAuthDto;

    if (!email && !username) {
      throw new BadRequestException('Email or Username is required');
    }

    const user = username
      ? await this.userRepository.findByUsername(username)
      : await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User or Password is invalid');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('User or Password is invalid');
    }

    const payload = { user: email, sub: user.id, role: user.role };
    const token = this.jwtService.sign(payload);

    return {
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
      token,
    };
  }
}
