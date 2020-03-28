import { Field, Float, InputType } from '@nestjs/graphql';
import { DateTime } from 'luxon';

@InputType()
export class CreateShoppingListInput {
  @Field()
  content: string;

  @Field({ nullable: true })
  note?: string;

  @Field(type => Float)
  minBudget: number;

  @Field(type => Float)
  maxBudget: number;
}
