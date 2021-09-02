import { buildSchema, registerEnumType } from 'type-graphql'
import { Gender, Role } from '~/@typedefs/User.type'
import { ResolveTime } from '~/@middlewares/ResolveTime.middleware'
import { DateScalar } from '~/@scalar/Date.type'
import { AuthorizeAccess } from '~/@middlewares/AuthorizeAccess.middleware'

export async function createSchema() {
   registerEnumType(Gender, { name: 'Gender', description: 'The basic Gender' })
   registerEnumType(Role, { name: 'Role', description: 'The basic Role' })

   return await buildSchema({
      resolvers: [__dirname + '/resolvers/*.resolver.ts'],
      scalarsMap: [{ type: Date, scalar: DateScalar }],
      globalMiddlewares: [ResolveTime],
      authChecker: AuthorizeAccess,
   })
}
