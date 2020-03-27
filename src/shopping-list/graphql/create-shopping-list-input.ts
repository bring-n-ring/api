import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateShoppingListInput {
  @Field()
  street: string;

  @Field()
  zipcode: string;

  @Field({ nullable: true })
  additionalInfo?: string;

  @Field(type => Float, { nullable: true })
  latitude?: number;

  @Field(type => Float, { nullable: true })
  longitude?: number;
}
