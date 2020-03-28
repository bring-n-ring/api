import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, field } from 'firebase-firestorm';

@ObjectType()
export class BaseModel extends Entity {
  @Field()
  @field()
  id: string;
}
