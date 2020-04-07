import { Field, InputType } from '@nestjs/graphql';

import { BudgetInput } from '../../../budget/graphql/dto/budget-input';
import { ShoppingListType } from '../../model/shopping-list-type.enum';

@InputType()
export class CreateShoppingListInput {
  @Field()
  content: string;

  @Field({ nullable: true })
  note?: string;

  @Field()
  budget: BudgetInput;

  @Field((type) => ShoppingListType)
  shoppingListType: ShoppingListType;
}
