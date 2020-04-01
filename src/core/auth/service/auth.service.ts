import { Injectable } from '@nestjs/common';
import { UserService } from '../../../user/service/user.service';
import { User } from '../../../user/model/user.model';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async createLogin(
    email: string,
    password: string,
  ): Promise<{ error: unknown; userRecord: admin.auth.UserRecord }> {
    return admin
      .auth()
      .createUser({ email, password })
      .then(userRecord => ({ userRecord, error: null }))
      .catch(error => ({ error, userRecord: null }));
  }

  async validate({ id }): Promise<User> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw Error('Authenticate validation error');
    }
    return user;
  }
}
