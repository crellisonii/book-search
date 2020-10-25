import { Field, Int, ObjectType } from "type-graphql";

import { Tuple } from "../tuples";
import { Type_Value } from "../type_value";

@ObjectType()
export class Work {
  @Field(type => [Work_Author]) authors: Work_Author[];
  @Field(type => [Int]) covers: number[];
  @Field(type => Type_Value) created: Type_Value;
  @Field(type => Type_Value) description: Type_Value;
  @Field(type => String) key: string;
  @Field(type => Type_Value) last_modified: Type_Value;
  @Field(type => Int) latest_revision: number;
  @Field(type => Int) revision: number;
  @Field(type => [String]) subject_people: string[];
  @Field(type => [String]) subject_places: string[];
  @Field(type => [String]) subject_times: string[];
  @Field(type => [String]) subjects: string[];
  @Field(type => String) title: string;
  @Field(type => Tuple)  type: Tuple;
}

@ObjectType()
class Work_Author {
  @Field(type => Tuple) author: Tuple;
  @Field(type => Tuple) type: Tuple;
}