import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';

import {
  dateTimeToTimestamp,
  serverTimestamp,
} from '../../core/db/firestore-timestamp';
import { ShoppingList } from '../../shopping-list/model/shopping-list.model';
import { User } from '../../user/model/user.model';
import { CreateOrderInput } from '../graphql/dto/create-order-input';
import { UpdateOrderInput } from '../graphql/dto/update-order-input';
import { Order } from '../model/order.model';

@Injectable()
export class OrderService {
  findAll(): Promise<Order[]> {
    return Collection(Order).find();
  }

  findById(id: string): Promise<Order> {
    return Collection(Order).get(id);
  }

  create(order: Order & CreateOrderInput): Promise<Order> {
    order.linger = Collection(User).doc(order.lingerId);
    order.shoppingLists = order.shoppingListIds.map((id) =>
      Collection(ShoppingList).doc(id),
    );
    order.createdAtTimestamp = serverTimestamp();
    order.deadlineTimestamp = dateTimeToTimestamp(order.deadline);
    return Collection(Order).create(order);
  }

  update(order: Order & UpdateOrderInput): Promise<Order> {
    order.linger = Collection(User).doc(order.lingerId);
    order.bringer = Collection(User).doc(order.bringerId);
    order.shoppingLists = order.shoppingListIds.map((id) =>
      Collection(ShoppingList).doc(id),
    );
    order.updatedAtTimestamp = serverTimestamp();
    order.acceptedAtTimestamp = dateTimeToTimestamp(order.acceptedAt);
    order.deadlineTimestamp = dateTimeToTimestamp(order.deadline);
    return Collection(Order).update(order);
  }
}
