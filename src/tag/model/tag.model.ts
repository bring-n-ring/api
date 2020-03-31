import { Field, ObjectType } from '@nestjs/graphql';
import { field, rootCollection } from 'firebase-firestorm';
import { BaseModel } from '../../core/model/base.model';

@ObjectType()
@rootCollection({
  name: 'tag',
})
export class Tag extends BaseModel {
  @Field()
  @field()
  name: string;

  @Field()
  @field()
  category: string;
}