import { Field, InputType } from '@nestjs/graphql';
import { BudgetInput } from '../../../budget/graphql/dto/budget-input';

@InputType()
export class CreateShoppingListInput {
  @Field()
  content: string;

  @Field({ nullable: true })
  note?: string;

  @Field()
  budget: BudgetInput;

  @Field()
  shoppingListTypeId: string;
}
