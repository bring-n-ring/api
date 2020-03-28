import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShoppingListTypeService } from '../../shopping-list-type/service/shopping-list-type.service';
import { ShoppingList } from '../model/shopping-list.model';
import { ShoppingListService } from '../service/shopping-list.service';
import { CreateShoppingListInput } from './create-shopping-list-input';

@Resolver(of => ShoppingList)
export class ShoppingListResolver {
  constructor(
    private readonly shoppingListService: ShoppingListService,
    private readonly shoppingListTypeService: ShoppingListTypeService,
  ) {}

  @Query(returns => [ShoppingList])
  shoppingLists(): Promise<ShoppingList[]> {
    return this.shoppingListService.findAll();
  }

  @Query(returns => ShoppingList)
  async shoppingList(
    @Args({ name: 'id', type: () => String }) id: string,
  ): Promise<ShoppingList> {
    const shoppingList = await this.shoppingListService.findById(id);
    shoppingList.shoppingListType = await this.shoppingListTypeService.findById(
      shoppingList.shoppingListTypeId,
    );
    return shoppingList;
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
