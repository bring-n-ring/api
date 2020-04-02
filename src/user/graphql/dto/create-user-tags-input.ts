import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserTagsInput {
  @Field()
  userID: string;

  @Field(type => [String])
  tagsIDs: string[];
}
