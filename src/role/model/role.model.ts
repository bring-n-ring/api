import { Field, Int, ObjectType } from '@nestjs/graphql';
import { field, rootCollection, subCollection, ICollection } from 'firebase-firestorm';
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