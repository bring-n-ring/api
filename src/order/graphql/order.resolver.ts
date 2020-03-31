import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DateTime } from 'luxon';
import { timestampToDateTime } from '../../core/db/firestore-timestamp';
import { ShoppingList } from '../../shopping-list/model/shopping-list.model';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';
import { User } from '../../user/model/user.model';
import { UserService } from '../../user/service/user.service';
import { Order } from '../model/order.model';
import { OrderService } from '../service/order.service';
import { CreateOrderInput } from './dto/create-order-input';
import { UpdateOrderInput } from './dto/update-order-input';

@Resolver(of => Order)
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    private readonly userService: UserService,
    private readonly shoppingListService: ShoppingListService,
  ) {}

  @Query(returns => [Order])
  orders(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Query(returns => Order)
  order(@Args({ name: 'id', type: () => String }) id: string): Promise<Order> {
    return this.orderService.findById(id);
  }

  @ResolveField('linger', returns => User)
  linger(@Parent() order: Order) {
    return this.userService.findById(order.linger.id);
  }

  @ResolveField('bringer', returns => User)
  bringer(@Parent() order: Order) {
    return this.userService.findById(order.bringer.id);
  }

  @ResolveField('shoppingList', returns => ShoppingList)
  shoppingList(@Parent() order: Order) {
    return this.shoppingListService.findById(order.shoppingList.id);
  }

  @ResolveField('createdAt', returns => DateTime)
  createdAt(@Parent() order: Order) {
    return timestampToDateTime(order.createdAtTimestamp);
  }

  @ResolveField('updatedAt', returns => DateTime)
  updatedAt(@Parent() order: Order) {
    return timestampToDateTime(order.updatedAtTimestamp);
  }

  @ResolveField('acceptedAt', returns => DateTime)
  acceptedAt(@Parent() order: Order) {
    return timestampToDateTime(order.acceptedAtTimestamp);
  }

  @ResolveField('deadline', returns => DateTime)
  deadline(@Parent() order: Order) {
    return timestampToDateTime(order.deadlineTimestamp);
  }

  @Mutation(returns => Order)
  createOrder(
    @Args('createOrderInput') args: CreateOrderInput,
  ): Promise<Order> {
    return this.orderService.create(Object.assign(new Order(), args));
  }

  @Mutation(returns => Order)
  updateOrder(
    @Args('updateOrderInput') args: UpdateOrderInput,
  ): Promise<Order> {
    return this.orderService.update(Object.assign(new Order(), args));
  }
}
