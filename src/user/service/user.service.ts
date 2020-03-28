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

  async create(user: User): Promise<User> {
    const addr = user.address
    delete user.address
    const newUser = await Collection(User).create(user);
    addr.forEach(function (addressItem) {
      let address = Object.assign(new Address(), addressItem)
      Collection(User).doc(newUser.id).collection(Address).create(address)
    })

    return newUser
  }
  async address(user: User): Promise<Address[]> {
    const userRef = Collection(User).doc(user.id).collection(Address)
    const addressSnap = await userRef.find()
    return addressSnap
  }

}
