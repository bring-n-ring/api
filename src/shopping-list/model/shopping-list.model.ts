import { Field, Float, ObjectType } from '@nestjs/graphql';
import {
  documentRef,
  field,
  IDocumentRef,
  rootCollection,
} from 'firebase-firestorm';
import { DateTime } from 'luxon';
import { FieldValue } from '../../core/db/firestore-utils';
import { BaseModel } from '../../core/model/base.model';
import { ShoppingListType } from '../../shopping-list-type/model/shopping-list-type.model';

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

  @Field(type => Float)
  @field()
  minBudget: number;

  @Field(type => Float)
  @field()
  maxBudget: number;

  @Field(type => ShoppingListType)
  @documentRef({
    name: 'shoppingListType',
    entity: ShoppingListType,
  })
  shoppingListType!: IDocumentRef<ShoppingListType>;

  @Field()
  createdAt: DateTime;

  @field()
  createdAtTimestamp?: FieldValue;
}
