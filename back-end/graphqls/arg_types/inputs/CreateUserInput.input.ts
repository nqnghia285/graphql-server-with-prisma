import 'reflect-metadata'
import { IsEmail, Length } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { Gender, Role } from '~/@typedefs/User.type'

@InputType()
export class CreateUserInput {
   @Field()
   @Length(1, 30)
   public name!: string

   @Field(() => Gender)
   public gender!: Gender

   @Field()
   @IsEmail()
   @Length(10, 30)
   public email!: string

   @Field()
   @Length(6, 20)
   public password!: string

   @Field(() => Role)
   public role!: Role
}
