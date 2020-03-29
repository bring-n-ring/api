import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Address } from '../../address/model/address.model';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { CreateUserInput } from './dto/create-user-input';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ResolveField('addresses', returns => [Address])
  async address(@Parent() user: User) {
    return this.userService.resolveAddresses(user);
  }

  @Mutation(returns => User)
  async createUser(
    @Args('createUserInput') args: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(Object.assign(new User(), args));
  }
}
