import { Field, InputType } from '@nestjs/graphql';
import { DateTime } from 'luxon';

@InputType()
export class CreateOrderInput {
  @Field()
  lingerId: string;

  @Field()
  shoppingListId: string;

  @Field()
  deadline: DateTime;
}
