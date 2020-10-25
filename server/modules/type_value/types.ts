import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Type_Value {
  @Field(type => String) type: string;
  @Field(type => String) value: string;
}