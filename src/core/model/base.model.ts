import { Field, ObjectType } from '@nestjs/graphql';
import { Entity } from 'firebase-firestorm';

@ObjectType()
export class BaseModel extends Entity {
  @Field()
  id: string;
}
