import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from '../model/role.model';
import { RoleService } from '../service/role.service';
import { CreateRoleInput } from './create-role-input';

@Resolver(of => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(returns => [Role])
  roles(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Mutation(returns => Role)
  async createRole(
    @Args('createRoleInput') args: CreateRoleInput,
  ): Promise<Role> {
    return this.roleService.create(Object.assign(new Role(), args));
  }
}
