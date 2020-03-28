import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShoppingListType } from '../model/shopping-list-type.model';
import { ShoppingListTypeService } from '../service/shopping-list-type.service';

@Resolver(of => ShoppingListType)
export class ShoppingListTypeResolver {
  constructor(
    private readonly shoppingListTypeService: ShoppingListTypeService,
  ) {}

  @Query(returns => [ShoppingListType])
  shoppingListTypes(): Promise<ShoppingListType[]> {
    return this.shoppingListTypeService.findAll();
  }

  @Query(returns => ShoppingListType)
  async shoppingListType(@Args({ name: 'id', type: () => String }) id: string) {
    return this.shoppingListTypeService.findById(id);
  }
}
