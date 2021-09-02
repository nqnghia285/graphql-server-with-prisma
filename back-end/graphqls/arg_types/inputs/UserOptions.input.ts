import 'reflect-metadata'
import { IsEmail } from 'class-validator'
import { Field, InputType, Int } from 'type-graphql'
import { Gender, Role } from '~/@typedefs/User.type'

@InputType()
export class UserOptions {
   @Field(() => Int, { nullable: true })
   public id?: number

   @Field({ nullable: true })
   public name?: string

   @Field(() => Gender, { nullable: true })
   public gender?: Gender

   @Field({ nullable: true })
   @IsEmail()
   public email?: string

   @Field({ nullable: true })
   public password?: string

   @Field(() => Role, { nullable: true })
   public role?: Role

   @Field({ nullable: true })
   public createdAt?: Date

   @Field({ nullable: true })
   public updatedAt?: Date
}
