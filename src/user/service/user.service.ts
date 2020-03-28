import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
import { User } from '../model/user.model';
import { Address } from '../../address/model/address.model';

@Injectable()
export class UserService {
  constructor() {}

  findAll(): Promise<User[]> {
    return Collection(User).find();
  }

  create(user: User): Promise<User> {
    return Collection(User).create(user);
  }
  address(user: User): Promise<Address[]> {
    const userRef = Collection(User).doc(user.id);
    const address = userRef.collection(Address).find();
    return address
  }

}
