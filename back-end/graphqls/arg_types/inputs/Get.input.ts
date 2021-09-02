import 'reflect-metadata'
import { Field, InputType, Int } from 'type-graphql'

@InputType()
export class GetInput {
   @Field(() => Int)
   public offset!: number

   @Field(() => Int)
   public limit!: number
}
