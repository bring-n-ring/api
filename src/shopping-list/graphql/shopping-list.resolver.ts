import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ShoppingListType } from '../../shopping-list-type/model/shopping-list-type.model';
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
  shoppingList(
    @Args({ name: 'id', type: () => String }) id: string,
  ): Promise<ShoppingList> {
    return this.shoppingListService.findById(id);
  }

  @ResolveField('shoppingListType', returns => ShoppingListType)
  async shoppingListType(@Parent() shoppingList: ShoppingList) {
    return this.shoppingListService.resolveShoppingListType(shoppingList);
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
