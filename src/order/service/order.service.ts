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
    order.shoppingList = Collection(ShoppingList).doc(order.shoppingListId);
    order.createdAtTimestamp = serverTimestamp();
    order.deadlineTimestamp = dateTimeToTimestamp(order.deadline);
    return Collection(Order).create(order);
  }

  update(order: Order & UpdateOrderInput): Promise<Order> {
    order.linger = Collection(User).doc(order.lingerId);
    order.bringer = Collection(User).doc(order.bringerId);
    order.shoppingList = Collection(ShoppingList).doc(order.shoppingListId);
    order.updatedAtTimestamp = serverTimestamp();
    order.acceptedAtTimestamp = dateTimeToTimestamp(order.acceptedAt);
    order.deadlineTimestamp = dateTimeToTimestamp(order.deadline);
    return Collection(Order).update(order);
  }
}
