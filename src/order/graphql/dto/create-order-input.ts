import { Field, InputType } from '@nestjs/graphql';
import { DateTime } from 'luxon';

@InputType()
export class CreateOrderInput {
  @Field()
  lingerId: string;

  @Field(type => [String])
  shoppingListIds: string[];

  @Field()
  deadline: DateTime;
}
