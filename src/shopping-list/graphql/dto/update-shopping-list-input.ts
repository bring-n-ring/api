import { Field, InputType } from '@nestjs/graphql';

import { BudgetInput } from '../../../budget/graphql/dto/budget-input';
import { ShoppingListType } from '../../model/shopping-list-type.enum';

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

  @Field((type) => ShoppingListType, { nullable: true })
  shoppingListType?: ShoppingListType;
}
