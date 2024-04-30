import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: any, res: any, next: () => void) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }
    try {
      const payload = this.jwtService.verify(token);
      req['user'] = {
        id: payload.sub,
        role: payload.role,
      };

      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
