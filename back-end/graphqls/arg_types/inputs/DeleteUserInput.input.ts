import 'reflect-metadata'
import { Field, InputType, Int } from 'type-graphql'

@InputType()
export class DeleteUserInput {
   @Field(() => Int)
   public id!: number
}
