import { Module } from '@nestjs/common';

import { ShoppingListService } from '../shopping-list/service/shopping-list.service';
import { ShoppingListModule } from '../shopping-list/shopping-list.module';
import { UserService } from '../user/service/user.service';
import { UserModule } from '../user/user.module';

import { OrderInputValidator } from './graphql/order-input.validator';
import { OrderResolver } from './graphql/order.resolver';
import { OrderService } from './service/order.service';

@Module({
  imports: [UserModule, ShoppingListModule],
  providers: [
    OrderResolver,
    OrderService,
    UserService,
    ShoppingListService,
    OrderInputValidator,
  ],
})
export class OrderModule {}
