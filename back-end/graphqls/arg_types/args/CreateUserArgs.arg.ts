import 'reflect-metadata'
import { ArgsType, Field } from 'type-graphql'
import { CreateUserInput } from '~/@args/inputs/CreateUserInput.input'

@ArgsType()
export class CreateUserArgs {
   /* Arguments */
   @Field(() => CreateUserInput)
   public userInput!: CreateUserInput
}
