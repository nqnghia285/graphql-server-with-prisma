import { Gender, Role } from '.prisma/client'
import { hashPWD } from 'customed-bcrypt'
import { config } from 'dotenv'
import { models } from '~/@prisma'

config()

export async function createData() {
   if (process.env.NODE_ENV !== 'production') {
      await models.user
         .create({
            data: {
               name: 'Admin',
               email: 'admin@gmail.com',
               gender: Gender.MALE,
               password: hashPWD('123456')!,
               role: Role.ADMIN,
               taskLists: {
                  createMany: {
                     data: [{ title: 'TaskList 1' }, { title: 'TaskList 2' }, { title: 'TaskList 3' }],
                  },
               },
            },
         })
         .then(async (user) => {
            console.log('Create Admin success!')
            console.dir(user)

            await models.task.createMany({
               data: [
                  { deadline: new Date().toISOString(), title: 'Task 1', taskListId: 1 },
                  { deadline: new Date().toISOString(), title: 'Task 2', taskListId: 1 },
                  { deadline: new Date().toISOString(), title: 'Task 3', taskListId: 2 },
                  { deadline: new Date().toISOString(), title: 'Task 4', taskListId: 2 },
                  { deadline: new Date().toISOString(), title: 'Task 5', taskListId: 3 },
               ],
            })
         })
         .catch((err) => {
            console.log(err)
         })
   }
}
