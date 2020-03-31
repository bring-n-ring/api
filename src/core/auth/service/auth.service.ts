import { Injectable } from '@nestjs/common';
import { UserService } from '../../../user/service/user.service';
import { User } from '../../../user/model/user.model';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validate({ id }): Promise<User> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw Error('Authenticate validation error');
    }
    return user;
  }
}
