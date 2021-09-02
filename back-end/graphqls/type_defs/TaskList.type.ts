import 'reflect-metadata'
import { Length } from 'class-validator'
import { Field, ObjectType, Int } from 'type-graphql'
import { Task } from '~/@typedefs/Task.type'
import { User } from '~/@typedefs/User.type'

/* Type */
@ObjectType()
export class TaskList {
   /* Attributes */
   @Field(() => Int, { nullable: true })
   public id?: number

   @Field({ nullable: true })
   @Length(1, 30)
   public title?: string

   @Field({ nullable: true })
   @Length(1, 255)
   public description?: string

   @Field(() => Int, { nullable: true })
   public userId?: number

   /* Timestamps */
   @Field({ nullable: true })
   public createdAt?: Date

   @Field({ nullable: true })
   public updatedAt?: Date

   /* Association models */
   @Field(() => User, { nullable: true })
   public user?: User

   @Field(() => [Task], { nullable: true })
   public tasks?: Task[]
}

// export default TaskList
