import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DateTimeScalar } from './core/scalar/date-time.scalar';
import { OrderModule } from './order/order.module';
import { RoleModule } from './role/role.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
    AddressModule,
    ShoppingListModule,
    UserModule,
    RoleModule,
    TagModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateTimeScalar],
})
export class AppModule {}
