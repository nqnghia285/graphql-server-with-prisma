import 'reflect-metadata'
import { ArgsType, Field } from 'type-graphql'
import { UploadInput } from '~/@args/inputs/Upload.input'

@ArgsType()
export class UploadFileArgs {
   /* Arguments */
   @Field(() => UploadInput)
   public uploadInput!: UploadInput
}
