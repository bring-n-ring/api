import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateShoppingListInput {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  note?: string;

  @Field(type => Float)
  minBudget: number;

  @Field(type => Float)
  maxBudget: number;

  @Field()
  shoppingListTypeId: string;
}