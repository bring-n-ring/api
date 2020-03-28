import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { CreateUserInput } from './create-user-input';
import { Address } from '../../address/model/address.model'

@Resolver(of => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(returns => [User])
    users(): Promise<User[]> {
      return this.userService.findAll();
    }

    @ResolveField('address', returns => [Address])
    async address(@Parent() user: User) {
      //const { id } = user;
      return this.userService.address(user)

    }

    @Mutation(returns => User)
    async createUser(
        @Args('createUserInput') args: CreateUserInput
    ): Promise<User> {
      return this.userService.create(Object.assign(new User(), args))
    }
}