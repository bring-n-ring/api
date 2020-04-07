import { Field, ObjectType } from '@nestjs/graphql';
import { field, rootCollection } from 'firebase-firestorm';

import { BaseModel } from '../../core/model/base.model';

@ObjectType()
@rootCollection({
  name: 'role',
})
export class Role extends BaseModel {
  @Field()
  @field()
  name: string;
}
