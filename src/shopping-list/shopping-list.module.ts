import { Module } from '@nestjs/common';
import { ShoppingListTypeService } from '../shopping-list-type/service/shopping-list-type.service';
import { ShoppingListTypeModule } from '../shopping-list-type/shopping-list-type.module';
import { ShoppingListResolver } from './graphql/shopping-list.resolver';
import { ShoppingListService } from './service/shopping-list.service';

@Module({
  imports: [ShoppingListTypeModule],
  providers: [
    ShoppingListResolver,
    ShoppingListService,
    ShoppingListTypeService,
  ],
})
export class ShoppingListModule {}
