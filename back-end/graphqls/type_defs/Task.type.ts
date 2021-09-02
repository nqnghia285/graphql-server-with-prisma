import 'reflect-metadata'
import { Length } from 'class-validator'
import { Field, Int, ObjectType } from 'type-graphql'
import { TaskList } from '~/@typedefs/TaskList.type'
import { User } from '~/@typedefs/User.type'

/* Type */
@ObjectType()
export class Task {
   /* Attributes */
   @Field(() => Int, { nullable: true })
   public id?: number

   @Field({ nullable: true })
   @Length(1, 30)
   public title?: string

   @Field({ nullable: true })
   @Length(1, 255)
   public description?: string

   @Field({ nullable: true })
   public deadline?: Date

   @Field({ nullable: true })
   public done?: boolean

   @Field(() => Int, { nullable: true })
   public taskListId?: number

   /* Timestamps */
   @Field({ nullable: true })
   public createdAt?: Date

   @Field({ nullable: true })
   public updatedAt?: Date

   /* Association models */

   @Field(() => TaskList, { nullable: true })
   public taskList?: TaskList
}

// export default Task
