import { ExpressContext } from 'apollo-server-express'
import dotenv from 'dotenv'
import { IContext } from '~/@types/Context.type'
import { methods } from '~/@types/MethodCollections.type'
import { models } from '~/@prisma'
import { Gender, Role } from '~/@typedefs/User.type'
import { checkMethos } from '~/utility/checkMethod'

dotenv.config()

const JWT_KEY = process.env.JWT_KEY || ''

function handleRequest({ req, res }: ExpressContext): IContext {
   const user = { role: Role.ADMIN, id: 1, name: 'nghia', gender: Gender.MALE, email: 'nghia@gmail.com' }

   // console.log('Query in handleRequest');
   // console.dir(req.body.query);

   // console.log('Method: ', checkMethos(req.body.query, methods));

   // console.log('Info: ', req);

   return { req, res, user, models }
}

export default handleRequest
