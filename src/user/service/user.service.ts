import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';

import { Address } from '../../address/model/address.model';
import { Role } from '../../role/model/role.model';
import { Tag } from '../../tag/model/tag.model';
import { CreateUserInput } from '../graphql/dto/create-user-input';
import { CreateUserTagsInput } from '../graphql/dto/create-user-tags-input';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  findAll(): Promise<User[]> {
    return Collection(User).find();
  }

  findById(id: string): Promise<User> {
    return Collection(User).get(id);
  }

  async create(user: User & CreateUserInput): Promise<User> {
    const addresses = user.addresses;
    delete user.addresses;
    user.roles = [];

    user.roleIDs.forEach(async (roleID) => {
      user.roles.push(Collection(Role).doc(roleID));
    });

    user.tags = [];

    user.tagsIDs.forEach(async (tagID) => {
      user.tags.push(Collection(Tag).doc(tagID));
    });

    const newUser = await Collection(User).create(user);

    addresses.forEach((address) =>
      Collection(User)
        .doc(newUser.id)
        .collection(Address)
        .create(Object.assign(new Address(), address)),
    );

    return newUser;
  }

  async resolveAddresses(user: User): Promise<Address[]> {
    return await Collection(User).doc(user.id).collection(Address).find();
  }

  async resolveRoles(user: User): Promise<Role[]> {
    const roles = await user.roles;
    const rolesItems = [];
    roles.forEach(async (role) => {
      rolesItems.push(Collection(Role).get(role.id));
    });
    return await rolesItems;
  }

  async resolveTags(user: User): Promise<Tag[]> {
    const tags = await user.tags;
    const tagsItems = [];
    tags.forEach(async (tag) => {
      tagsItems.push(Collection(Tag).get(tag.id));
    });
    return await tagsItems;
  }

  async addTags(userTags: CreateUserTagsInput): Promise<User> {
    const user = await Collection(User).doc(userTags.userID).get();

    userTags.tagsIDs.forEach(async (tag) => {
      let exists = false;
      user.tags.forEach(async (existedTag) => {
        if (existedTag.id == tag) {
          exists = true;
        }
      });
      if (!exists) {
        user.tags.push(Collection(Tag).doc(tag));
      }
    });

    const updatedUser = new User();
    updatedUser.id = user.id;
    updatedUser.tags = user.tags;

    return await Collection(User).update(updatedUser);
  }
}
