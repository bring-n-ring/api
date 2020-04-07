import { Module } from '@nestjs/common';

import { ShoppingListResolver } from './graphql/shopping-list.resolver';
import { ShoppingListService } from './service/shopping-list.service';

@Module({
  providers: [ShoppingListResolver, ShoppingListService],
})
export class ShoppingListModule {}
