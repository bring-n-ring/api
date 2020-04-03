import { Field, ObjectType } from '@nestjs/graphql';
import { field, map, rootCollection } from 'firebase-firestorm';
import { DateTime } from 'luxon';
import { Budget } from '../../budget/model/budget.model';
import { BaseModel } from '../../core/model/base.model';
import { ShoppingListType } from './shopping-list-type.enum';

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
  @field()
  shoppingListType: ShoppingListType;

  @Field()
  createdAt: DateTime;

  @field()
  createdAtTimestamp?;

  @Field({ nullable: true })
  updatedAt: DateTime;

  @field()
  updatedAtTimestamp?;
}
