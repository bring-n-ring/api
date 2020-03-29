import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
import { ShoppingListType } from '../../shopping-list-type/model/shopping-list-type.model';
import { CreateShoppingListInput } from '../graphql/create-shopping-list-input';
import { ShoppingList } from '../model/shopping-list.model';

@Injectable()
export class ShoppingListService {
  constructor() {}

  findAll(): Promise<ShoppingList[]> {
    return Collection(ShoppingList).find();
  }

  findById(id: string): Promise<ShoppingList> {
    return Collection(ShoppingList).get(id);
  }

  async create(
    shoppingList: ShoppingList & CreateShoppingListInput,
  ): Promise<ShoppingList> {
    shoppingList.shoppingListType = Collection(ShoppingListType).doc(
      shoppingList.shoppingListTypeId,
    );
    return await Collection(ShoppingList).create(shoppingList);
  }

  async resolveShoppingListType(
    shoppingList: ShoppingList,
  ): Promise<ShoppingListType> {
    const shoppingListTypeId = await shoppingList.shoppingListType.id;
    return await Collection(ShoppingListType).get(shoppingListTypeId);
  }
}
