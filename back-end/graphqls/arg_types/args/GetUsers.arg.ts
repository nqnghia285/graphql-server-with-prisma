import 'reflect-metadata'
import { ArgsType, Field } from 'type-graphql'
import { GetInput } from '~/@args/inputs/Get.input'
import { UserOptions } from '~/@args/inputs/UserOptions.input'

@ArgsType()
export class GetUsersArgs {
   /* Arguments */
   @Field(() => GetInput)
   public getInput!: GetInput

   /* Model options */
   @Field(() => UserOptions, { nullable: true })
   public userOptions?: UserOptions
}
