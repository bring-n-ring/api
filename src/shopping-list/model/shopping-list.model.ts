import { Field, Float, ObjectType } from '@nestjs/graphql';
import { field, rootCollection } from 'firebase-firestorm';
import { BaseModel } from '../../core/model/base.model';

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
}
