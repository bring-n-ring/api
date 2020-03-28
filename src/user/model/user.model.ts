import { Field, Int, ObjectType } from '@nestjs/graphql';
import { field, rootCollection, subCollection, ICollection } from 'firebase-firestorm';
import { BaseModel } from '../../core/model/base.model';
import { Address } from '../../address/model/address.model'

@ObjectType()
@rootCollection({
  name: 'user',
})
//TODO: add roles, paymentInformation and tags models dependencies.
export class User extends BaseModel {
  @Field()
  @field()
  firstName: string;

  @Field()
  @field()
  lastName: string;

  @Field()
  @field()
  email: string;

  @Field({ nullable: true })
  @field()
  phone?: string;

  @Field({ nullable: true })
  @field()
  description?: string;

  @Field({ nullable: true })
  @field()
  image?: string;

  @Field(type => Int)
  @field()
  totalBringALings: number;

  @field()
  @subCollection({
    name: 'addresses',
    entity: Address,
  })
  addresses: ICollection<Address>[];

}