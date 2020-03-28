import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
import { ShoppingListType } from '../model/shopping-list-type.model';

@Injectable()
export class ShoppingListTypeService {
  constructor() {}

  findAll(): Promise<ShoppingListType[]> {
    return Collection(ShoppingListType).find();
  }

  findById(id: string): Promise<ShoppingListType> {
    return Collection(ShoppingListType).get(id);
  }
}
