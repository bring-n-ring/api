import { Module } from '@nestjs/common';

import { TagResolver } from './graphql/tag.resolver';
import { TagService } from './service/tag.service';

@Module({
  providers: [TagResolver, TagService],
})
export class TagModule {}
