import { Module } from '@nestjs/common';
import { UserResolver } from './graphql/user.resolver';
import { UserService } from './service/user.service';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}