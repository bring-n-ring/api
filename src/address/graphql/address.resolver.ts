import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Address } from '../model/address.model';
import { AddressService } from '../service/address.service';

import { CreateAddressInput } from './create-address-input';

@Resolver((of) => Address)
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  @Query((returns) => [Address])
  addresses(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Mutation((returns) => Address)
  async createAddress(
    @Args('createAddressInput') args: CreateAddressInput,
  ): Promise<Address> {
    return this.addressService.create(Object.assign(new Address(), args));
  }
}
