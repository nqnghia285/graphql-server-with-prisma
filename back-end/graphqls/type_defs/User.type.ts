import 'reflect-metadata'
import { IsEmail, Length } from 'class-validator'
import { Field, ObjectType, Int } from 'type-graphql'
import { Task } from '~/@typedefs/Task.type'
import { TaskList } from '~/@typedefs/TaskList.type'

export enum Gender {
   MALE = 'MALE',
   FEMALE = 'FEMALE',
}

export enum Role {
   ADMIN = 'ADMIN',
   CUSTOMER = 'CUSTOMER',
}

/* Type */
@ObjectType()
export class User {
   /* Attributes */
   @Field(() => Int, { nullable: true })
   public id?: number

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
   @Length(60, 60)
   public password?: string

   @Field(() => Role, { nullable: true })
   public role?: Role

   /* Timestamps */
   @Field({ nullable: true })
   public createdAt?: Date

   @Field({ nullable: true })
   public updatedAt?: Date

   /* Association models */
   @Field(() => [TaskList], { nullable: true })
   public taskLists?: TaskList[]
}

// export default User
