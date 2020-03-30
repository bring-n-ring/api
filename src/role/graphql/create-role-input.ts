import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateRoleInput {
    @Field()
    id: string;

    @Field()
    name: string;
}