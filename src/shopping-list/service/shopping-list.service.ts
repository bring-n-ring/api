import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
import { serverTimestamp } from '../../core/db/firestore-timestamp';
import { ShoppingListType } from '../../shopping-list-type/model/shopping-list-type.model';
import { CreateShoppingListInput } from '../graphql/dto/create-shopping-list-input';
import { UpdateShoppingListInput } from '../graphql/dto/update-shopping-list-input';
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

  create(
    shoppingList: ShoppingList & CreateShoppingListInput,
  ): Promise<ShoppingList> {
    shoppingList.shoppingListType = Collection(ShoppingListType).doc(
      shoppingList.shoppingListTypeId,
    );
    shoppingList.createdAtTimestamp = serverTimestamp();
    return Collection(ShoppingList).create(shoppingList);
  }

  update(
    shoppingList: ShoppingList & UpdateShoppingListInput,
  ): Promise<ShoppingList> {
    shoppingList.shoppingListType = Collection(ShoppingListType).doc(
      shoppingList.shoppingListTypeId,
    );
    shoppingList.updatedAtTimestamp = serverTimestamp();
    return Collection(ShoppingList).update(shoppingList);
  }
}
