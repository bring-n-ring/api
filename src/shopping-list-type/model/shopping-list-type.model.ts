import { Field, Float, ObjectType } from '@nestjs/graphql';
import { field, rootCollection } from 'firebase-firestorm';
import { BaseModel } from '../../core/model/base.model';

@ObjectType()
@rootCollection({
  name: 'shoppingListType',
})
export class ShoppingListType extends BaseModel {
  @Field()
  @field()
  name: string;
}
