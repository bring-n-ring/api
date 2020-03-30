import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
import { CreateRoleInput } from '../graphql/create-role-input';
import { Role } from '../model/role.model';

@Injectable()
export class RoleService {
  constructor() {}
  findAll(): Promise<Role[]> {
    return Collection(Role).find();
  }

  async create(role: Role & CreateRoleInput): Promise<Role> {
    return await Collection(Role).create(role);
  }
}
