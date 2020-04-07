import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Tag } from '../model/tag.model';
import { TagService } from '../service/tag.service';

import { CreateTagInput } from './create-tag-input';

@Resolver((of) => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Query((returns) => [Tag])
  tags(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Mutation((returns) => Tag)
  async createTag(@Args('createTagInput') args: CreateTagInput): Promise<Tag> {
    return this.tagService.create(Object.assign(new Tag(), args));
  }
}
