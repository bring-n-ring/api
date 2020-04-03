import { Injectable, NotFoundException } from '@nestjs/common';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';
import { UserService } from '../../user/service/user.service';
import { CreateOrderInput } from './dto/create-order-input';
import { UpdateOrderInput } from './dto/update-order-input';

@Injectable()
export class OrderInputValidator {
  constructor(
    private readonly userService: UserService,
    private readonly shoppingListService: ShoppingListService,
  ) {}

  async validate(input: CreateOrderInput | UpdateOrderInput) {
    if (!(await this.userService.findById(input.lingerId))) {
      throw new NotFoundException(`Linger ${input.lingerId} does not exist`);
    }

    for (const id of input.shoppingListIds) {
      if (!(await this.shoppingListService.findById(id))) {
        throw new NotFoundException(`Shopping list ${id} does not exist`);
      }
    }

    if (input instanceof UpdateOrderInput) {
      if (!(await this.userService.findById(input.bringerId))) {
        throw new NotFoundException(
          `Bringer ${input.bringerId} does not exist`,
        );
      }
    }
  }
}
