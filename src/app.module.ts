import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DateTimeScalar } from './core/scalar/date-time.scalar';
import { ShoppingListTypeModule } from './shopping-list-type/shopping-list-type.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { TagModule } from './tag/tag.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
    AddressModule,
    ShoppingListModule,
    ShoppingListTypeModule,
    UserModule,
    RoleModule,
    TagModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateTimeScalar],
})
export class AppModule {}
