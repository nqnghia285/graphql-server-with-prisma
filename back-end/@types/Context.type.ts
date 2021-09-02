import { Request, Response } from 'express'
import { IModels } from '~/@prisma'
import { IUserInfo } from '~/@types/UserInfo.type'

export interface IContext {
   req: Request
   res: Response
   user?: IUserInfo
   models: IModels
   graphqlFields?: any
   select?: any
}
