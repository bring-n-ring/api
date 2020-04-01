import { Field, ObjectType } from '@nestjs/graphql';
import { field, rootCollection } from 'firebase-firestorm';
import { BaseModel } from '../../model/base.model';

@ObjectType()
@rootCollection({
  name: 'auth',
})
export class Auth extends BaseModel {
  @Field()
  @field()
  name: string;

  @Field()
  @field()
  category: string;
}
