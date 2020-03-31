import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { AuthService } from '../service/auth.service';

const tokenExtractor = (req: Request): string | string[] | null =>
  req && req.headers ? req.headers['X-Authorization'] : null;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: tokenExtractor,
      secretOrKey: process.env.JWT_SECRET || 'lol',
    });
  }

  validate(payload) {
    return this.authService.validate(payload);
  }
}
