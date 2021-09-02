import 'reflect-metadata'
import { IsEmail, Length } from 'class-validator'
import { Field, InputType, Int } from 'type-graphql'
import { Gender, Role } from '~/@typedefs/User.type'

@InputType()
export class UpdateUserInput {
   @Field(() => Int)
   public id!: number

   @Field({ nullable: true })
   @Length(1, 30)
   public name?: string

   @Field(() => Gender, { nullable: true })
   public gender?: Gender

   @Field({ nullable: true })
   @IsEmail()
   @Length(10, 30)
   public email?: string

   @Field({ nullable: true })
   @Length(6, 20)
   public password?: string

   @Field(() => Role, { nullable: true })
   public role?: Role
}
