import { Module } from '@nestjs/common';
import { UserResolver } from './graphql/user.resolver';
import { UserService } from './service/user.service';

@Module({
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
