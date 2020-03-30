import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
import { Address } from '../../address/model/address.model';
import { Role } from '../../role/model/role.model';
import { CreateUserInput } from '../graphql/dto/create-user-input';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  constructor() {}

  findAll(): Promise<User[]> {
    return Collection(User).find();
  }

  async create(user: User & CreateUserInput): Promise<User> {
    const addresses = user.addresses;
    delete user.addresses;
    user.roles = [];

    user.roleIDs.forEach(async roleID => {
      user.roles.push(Collection(Role).doc(roleID));
    });

    const newUser = await Collection(User).create(user);

    addresses.forEach(address =>
      Collection(User)
        .doc(newUser.id)
        .collection(Address)
        .create(Object.assign(new Address(), address)),
    );

    return newUser;
  }

  async resolveAddresses(user: User): Promise<Address[]> {
    return await Collection(User)
      .doc(user.id)
      .collection(Address)
      .find();
  }

  async resolveRoles(user: User): Promise<Role[]> {
    const roles = await user.roles;
    let rolesItems = [];
    roles.forEach(async role => {
      rolesItems.push(Collection(Role).get(role.id));
    });
    return await rolesItems;
  }
}
