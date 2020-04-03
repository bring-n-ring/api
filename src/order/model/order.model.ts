import { Field, ObjectType } from '@nestjs/graphql';
import {
  documentRef,
  field,
  IDocumentRef,
  rootCollection,
} from 'firebase-firestorm';
import { DateTime } from 'luxon';
import { BaseModel } from '../../core/model/base.model';
import { ShoppingList } from '../../shopping-list/model/shopping-list.model';
import { User } from '../../user/model/user.model';
import { OrderStatus } from './order-status.enum';

@ObjectType()
@rootCollection({
  name: 'order',
})
export class Order extends BaseModel {
  @Field(type => OrderStatus)
  @field()
  status: OrderStatus;

  @Field(type => User, { nullable: true })
  @documentRef({
    name: 'bringer',
    entity: User,
  })
  bringer?: IDocumentRef<User>;

  @Field(type => User)
  @documentRef({
    name: 'linger',
    entity: User,
  })
  linger!: IDocumentRef<User>;

  @Field(type => [ShoppingList])
  @documentRef({
    name: 'shoppingLists',
    entity: ShoppingList,
  })
  shoppingLists!: IDocumentRef<ShoppingList>[];

  @Field()
  createdAt: DateTime;

  @field()
  createdAtTimestamp?;

  @Field({ nullable: true })
  updatedAt: DateTime;

  @field()
  updatedAtTimestamp?;

  @Field({ nullable: true })
  acceptedAt: DateTime;

  @field()
  acceptedAtTimestamp?;

  @Field({ nullable: true })
  deadline: DateTime;

  @field()
  deadlineTimestamp?;
}
