import { PrismaClient, Prisma } from '@prisma/client'

export interface IModels extends PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined> {}

export const models: IModels = new PrismaClient()
