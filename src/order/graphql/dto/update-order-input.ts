import { Field, InputType } from '@nestjs/graphql';
import { DateTime } from 'luxon';
import { OrderStatus } from '../../model/order-status.enum';

@InputType()
export class UpdateOrderInput {
  @Field()
  id: string;

  @Field()
  status: OrderStatus;

  @Field()
  lingerId: string;

  @Field()
  bringerId: string;

  @Field(type => [String])
  shoppingListIds: string[];

  @Field()
  acceptedAt: DateTime;

  @Field()
  deadline: DateTime;
}
