import { Field, ObjectType } from '@nestjs/graphql';
import { field } from 'firebase-firestorm';

@ObjectType()
export class Budget {
  @Field()
  @field()
  currency: string;

  @Field()
  @field()
  from: number;

  @Field()
  @field()
  to: number;
}
