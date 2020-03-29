import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Timestamp } from 'firebase-firestorm';
import { DateTime } from 'luxon';
import { ShoppingListType } from '../../shopping-list-type/model/shopping-list-type.model';
import { ShoppingList } from '../model/shopping-list.model';
import { ShoppingListService } from '../service/shopping-list.service';
import { CreateShoppingListInput } from './create-shopping-list-input';

@Resolver(of => ShoppingList)
export class ShoppingListResolver {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Query(returns => [ShoppingList])
  shoppingLists(): Promise<ShoppingList[]> {
    return this.shoppingListService.findAll();
  }

  @Query(returns => ShoppingList)
  shoppingList(
    @Args({ name: 'id', type: () => String }) id: string,
  ): Promise<ShoppingList> {
    return this.shoppingListService.findById(id);
  }

  @ResolveField('shoppingListType', returns => ShoppingListType)
  shoppingListType(@Parent() shoppingList: ShoppingList) {
    return this.shoppingListService.resolveShoppingListType(shoppingList);
  }

  @ResolveField('createdAt', returns => DateTime)
  createdAt(@Parent() shoppingList: ShoppingList) {
    const timestamp = shoppingList.createdAtTimestamp as Timestamp;
    return DateTime.fromJSDate(timestamp.toDate());
  }

  @Mutation(returns => ShoppingList)
  createShoppingList(
    @Args('createShoppingListInput') args: CreateShoppingListInput,
  ): Promise<ShoppingList> {
    return this.shoppingListService.create(
      Object.assign(new ShoppingList(), args),
    );
  }
}
