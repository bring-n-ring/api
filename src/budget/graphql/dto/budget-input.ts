import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BudgetInput {
  @Field()
  currency: string;

  @Field()
  from: number;

  @Field()
  to: number;
}
