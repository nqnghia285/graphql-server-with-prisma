import 'reflect-metadata'
import prisma from '@prisma/client'
import { hashPWD } from 'customed-bcrypt'
import { Args, Authorized, Ctx, Info, Mutation, Query, Resolver, Root, UseMiddleware } from 'type-graphql'
import { CreateUserArgs } from '~/@args/args/CreateUserArgs.arg'
import { GetUsersArgs } from '~/@args/args/GetUsers.arg'
import { UpdateUserArgs } from '~/@args/args/UpdateUserArgs.arg'
import { IResponse } from '~/@args/types/Response.type'
import { ResolverParamsParser } from '~/@middlewares/ResolverParamsParser.middleware'
import { Role, User } from '~/@typedefs/User.type'
import { IContext } from '~/@types/Context.type'
import { copyInstance } from '~/utility/CopyInstance'
import { DeleteUsersArgs } from '~/@args/args/DeleteUserArgs.arg'
import { GraphQLResolveInfo } from 'graphql'

@Resolver()
export class UserResolver {
   @Query(() => [User])
   @Authorized('ADMIN', 'CUSTOMER')
   @UseMiddleware(ResolverParamsParser)
   async getUsers(
      @Root() root: unknown,
      @Args() { getInput, userOptions }: GetUsersArgs,
      @Ctx() { models, user, graphqlFields, select }: IContext,
      @Info() info: GraphQLResolveInfo
   ): Promise<unknown[]> {
      const { offset, limit } = getInput
      const whereOptions = {}
      copyInstance(whereOptions, userOptions)

      console.log('whereOptions: ')
      console.dir(whereOptions, { depth: 6 })

      console.log('Info: ')
      console.dir(info, { depth: 4 })

      console.log('Select AST: ')
      console.dir(select, { depth: 4 })

      const users = await models.user.findMany({
         skip: offset,
         take: limit,
         where: whereOptions,
         select: select,
      })

      // console.log('Root: ')
      // console.dir(root)

      console.log('Users:')
      console.dir(users)

      console.log(`graphqlFields in ${info.fieldName}`)
      console.dir(graphqlFields, { depth: 4 })

      return users
   }

   @Mutation(() => IResponse)
   @UseMiddleware(ResolverParamsParser)
   async createUser(@Args() { userInput }: CreateUserArgs, @Ctx() { models, user, graphqlFields }: IContext): Promise<IResponse> {
      const res: IResponse = { isSuccess: false, message: 'Create user failure!' }

      userInput.password = hashPWD(userInput.password)!

      const userExist = await models.user.findUnique({
         where: {
            email: userInput.email,
         },
      })

      if (userExist || !((userInput.role === Role.ADMIN && user?.role === Role.ADMIN) || userInput.role === Role.CUSTOMER)) {
         return res
      }

      await models.user
         .create({
            data: userInput,
         })
         .then(() => {
            res.isSuccess = true
            res.message = 'Create user success!'
         })

      return res
   }

   @Mutation(() => IResponse)
   async updateUser(@Args() { userInput }: UpdateUserArgs, @Ctx() { models, user, graphqlFields }: IContext): Promise<IResponse> {
      const res: IResponse = { isSuccess: false, message: 'Create user failure!' }

      if ((user?.role === Role.CUSTOMER && user?.id !== userInput.id) || (user?.role === Role.CUSTOMER && userInput.role === Role.ADMIN)) {
         return res
      }

      userInput.password = hashPWD(userInput.password)

      await models.user
         .update({
            where: {
               id: userInput.id,
            },
            data: userInput,
         })
         .then(() => {
            res.isSuccess = true
            res.message = 'Update user success!'
         })

      return res
   }

   @Mutation(() => IResponse)
   @Authorized('ADMIN')
   async deleteUser(@Args() { userInput }: DeleteUsersArgs, @Ctx() { models, user, graphqlFields }: IContext): Promise<IResponse> {
      const res: IResponse = { isSuccess: false, message: 'Create user failure!' }

      await models.user
         .delete({
            where: {
               id: userInput.id,
            },
         })
         .then(() => {
            res.isSuccess = true
            res.message = 'Delete user success!'
         })

      return res
   }
}
