// import * as bcryptjs from 'bcryptjs';
import { Response } from 'express';
import { Mutation, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../user/service/user.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UserService,
  ) {}

  @Mutation()
  async login(_, res: Response) {
    const id = 'B9U3HgOIQErk4x76VeBU';
    const jwt = this.jwt.sign({ id });
    const user = await this.userService.findById(id);

    return { user, token: jwt };
  }

  //   @Mutation()
  //   async create() {
  //     const emailExists = await this.prisma.client.$exists.user({
  //       email: signUpInputDto.email,
  //     });
  //     if (emailExists) {
  //       throw Error('Email is already in use');
  //     }
  //     const password = await bcryptjs.hash(signUpInputDto.password, 10);

  //     const user = await this.prisma.client.createUser({
  //       ...signUpInputDto,
  //       password,
  //     });

  //     const jwt = this.jwt.sign({ id: user.id });
  //     res.cookie('token', jwt, { httpOnly: true });

  //     return user;
  //   }
}
