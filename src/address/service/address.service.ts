import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
import { Address } from '../model/address.model';

@Injectable()
export class AddressService {
  constructor() {}

  findAll(): Promise<Address[]> {
    return Collection(Address).find();
  }

  create(address: Address): Promise<Address> {
    return Collection(Address).create(address);
  }
}
