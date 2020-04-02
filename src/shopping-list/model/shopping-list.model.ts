import { Field, ObjectType } from '@nestjs/graphql';
import {
  documentRef,
  field,
  IDocumentRef,
  map,
  rootCollection,
} from 'firebase-firestorm';
import { DateTime } from 'luxon';
import { BaseModel } from '../../core/model/base.model';
import { ShoppingListType } from '../../shopping-list-type/model/shopping-list-type.model';
import { Budget } from '../../budget/model/budget.model';

@ObjectType()
@rootCollection({
  name: 'shoppingList',
})
export class ShoppingList extends BaseModel {
  @Field()
  @field()
  content: string;

  @Field({ nullable: true })
  @field()
  note?: string;

  @Field()
  @map({})
  budget!: Budget;

  @Field(type => ShoppingListType)
  @documentRef({
    name: 'shoppingListType',
    entity: ShoppingListType,
  })
  shoppingListType!: IDocumentRef<ShoppingListType>;

  @Field()
  createdAt: DateTime;

  @field()
  createdAtTimestamp?;

  @Field({ nullable: true })
  updatedAt: DateTime;

  @field()
  updatedAtTimestamp?;
}
