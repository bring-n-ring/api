import { Injectable } from '@nestjs/common';
import { Collection } from 'firebase-firestorm';
import { CreateTagInput } from '../graphql/create-tag-input';
import { Tag } from '../model/tag.model';

@Injectable()
export class TagService {
  constructor() {}
  findAll(): Promise<Tag[]> {
    return Collection(Tag).find();
  }

  async create(tag: Tag & CreateTagInput): Promise<Tag> {
    return await Collection(Tag).create(tag);
  }
}