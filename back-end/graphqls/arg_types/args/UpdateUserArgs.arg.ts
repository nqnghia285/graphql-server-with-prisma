import 'reflect-metadata'
import { ArgsType, Field } from 'type-graphql'
import { UpdateUserInput } from '~/@args/inputs/UpdateUserInput.input'

@ArgsType()
export class UpdateUserArgs {
   /* Arguments */
   @Field(() => UpdateUserInput)
   public userInput!: UpdateUserInput
}
