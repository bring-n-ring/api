// import * as bcryptjs from 'bcryptjs';
import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../user/service/user.service';
import { CreateLoginInput } from './create-login-input';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UserService,
  ) {}

  // @Mutation(returns => Tag)
  //   async createTag(
  //     @Args('createTagInput') args: CreateTagInput,
  //   ): Promise<Tag> {
  //     return this.tagService.create(Object.assign(new Tag(), args));
  //   }

  @Mutation()
  async login(@Args('createLoginInput') args: CreateLoginInput): Promise<any> {
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
