import { Gender, Role } from '~/graphqls/type_defs/User.type'

export interface IUserInfo {
   id: number
   name: string
   gender: Gender
   email: string
   role: Role
}
