import { Field, InputType, Int } from '@nestjs/graphql';
import { Address } from '../../../address/model/address.model';
import { CreateAddressInput } from '../../../address/graphql/create-address-input';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  image?: string;

  @Field(type => Int, { nullable: true })
  totalBringALings?: number;

  @Field(type => [CreateAddressInput])
  addresses: Address[];

  @Field(type => [String])
  roleIDs: string[];
}
