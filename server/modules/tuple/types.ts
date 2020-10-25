import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Tuple {
  @Field(type => String) key: string;
}