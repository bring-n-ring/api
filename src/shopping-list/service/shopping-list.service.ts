import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
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

  create(
    shoppingList: ShoppingList & CreateShoppingListInput,
  ): Promise<ShoppingList> {
    shoppingList.shoppingListType = Collection(ShoppingListType).doc(
      shoppingList.shoppingListTypeId,
    );
    shoppingList.createdAtTimestamp = admin.firestore.FieldValue.serverTimestamp();
    return Collection(ShoppingList).create(shoppingList);
  }

  async resolveShoppingListType(
    shoppingList: ShoppingList,
  ): Promise<ShoppingListType> {
    const shoppingListTypeId = await shoppingList.shoppingListType.id;
    return Collection(ShoppingListType).get(shoppingListTypeId);
  }
}
