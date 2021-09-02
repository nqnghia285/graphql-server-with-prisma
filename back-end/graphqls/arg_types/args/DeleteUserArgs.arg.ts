import 'reflect-metadata'
import { ArgsType, Field } from 'type-graphql'
import { DeleteUserInput } from '../inputs/DeleteUserInput.input'

@ArgsType()
export class DeleteUsersArgs {
   /* Arguments */
   @Field(() => DeleteUserInput)
   public userInput!: DeleteUserInput
}
