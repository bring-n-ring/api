import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
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

  create(shoppingList: ShoppingList): Promise<ShoppingList> {
    return Collection(ShoppingList).create(shoppingList);
  }
}
