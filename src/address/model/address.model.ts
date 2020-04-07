import { Field, Float, ObjectType } from '@nestjs/graphql';
import { field, rootCollection } from 'firebase-firestorm';

import { BaseModel } from '../../core/model/base.model';

@ObjectType()
@rootCollection({
  name: 'address',
})
export class Address extends BaseModel {
  @Field()
  @field()
  street: string;

  @Field()
  @field()
  zipcode: string;

  @Field({ nullable: true })
  @field()
  additionalInfo?: string;

  @Field((type) => Float, { nullable: true })
  @field()
  latitude?: number;

  @Field((type) => Float, { nullable: true })
  @field()
  longitude?: number;
}
