import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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

  @Mutation(returns => ShoppingList)
  async createShoppingList(
    @Args('createShoppingListInput') args: CreateShoppingListInput,
  ): Promise<ShoppingList> {
    return this.shoppingListService.create(
      Object.assign(new ShoppingList(), args),
    );
  }
}
