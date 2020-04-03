import { Field, InputType } from '@nestjs/graphql';
import { DateTime } from 'luxon';
import { OrderStatus } from '../../model/order-status.enum';

@InputType()
export class UpdateOrderInput {
  @Field()
  id: string;

  @Field(type => OrderStatus, { nullable: true })
  status?: OrderStatus;

  @Field({ nullable: true })
  lingerId?: string;

  @Field({ nullable: true })
  bringerId?: string;

  @Field(type => [String], { nullable: true })
  shoppingListIds?: string[];

  @Field({ nullable: true })
  acceptedAt?: DateTime;

  @Field({ nullable: true })
  deadline?: DateTime;
}
