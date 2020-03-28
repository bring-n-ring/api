import { Module } from '@nestjs/common';
import { ShoppingListTypeResolver } from './graphql/shopping-list-type.resolver';
import { ShoppingListTypeService } from './service/shopping-list-type.service';

@Module({
  providers: [ShoppingListTypeResolver, ShoppingListTypeService],
})
export class ShoppingListTypeModule {}
