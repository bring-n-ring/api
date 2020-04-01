// import * as bcryptjs from 'bcryptjs';
import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../user/service/user.service';
import { CreateLoginInput } from './create-login-input';
import { User } from '../../../user/model/user.model';
import { AuthService } from '../service/auth.service';
import { CreateUserInput } from '../../../user/graphql/dto/create-user-input';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(returns => User)
  async login(@Args('createLoginInput') args: CreateLoginInput): Promise<any> {
    const id = 'B9U3HgOIQErk4x76VeBU';
    const jwt = this.jwt.sign({ id });
    const user = await this.userService.findById(id);

    return { user };
  }

  @Mutation(returns => User)
  async createUser(@Args('createUserInput') args: CreateUserInput) {
    const { error } = await this.authService.createLogin(
      args.email,
      args.password,
    );

    if (error) {
      const { message } = (error as any).errorInfo || {};
      throw Error(message || 'Something went wrong');
    }
    const user = await this.userService.create(Object.assign(new User(), args));

    const jwt = this.jwt.sign({ id: user.id });

    return user;
  }
}
