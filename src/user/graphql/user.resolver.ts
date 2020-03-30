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
import { Role } from '../../role/model/role.model';
import { UserService } from '../service/user.service';
import { CreateUserInput } from './create-user-input';

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

  @ResolveField('roles', returns => [Role])
  async roles(@Parent() user: User) {
    return this.userService.resolveRoles(user);
  }

  @Mutation(returns => User)
  async createUser(
    @Args('createUserInput') args: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(Object.assign(new User(), args));
  }
}
