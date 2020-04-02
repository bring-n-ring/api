import { Field, InputType } from '@nestjs/graphql';
import { Budget } from '../../../budget/model/budget.model';
import { BudgetInput } from '../../../budget/graphql/dto/budget-input';

@InputType()
export class UpdateShoppingListInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  note?: string;

  @Field({ nullable: true })
  budget?: BudgetInput;

  @Field()
  shoppingListTypeId: string;
}
