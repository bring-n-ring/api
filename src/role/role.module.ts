import { Module } from '@nestjs/common';

import { RoleResolver } from './graphql/role.resolver';
import { RoleService } from './service/role.service';

@Module({
  providers: [RoleResolver, RoleService],
})
export class RoleModule {}
