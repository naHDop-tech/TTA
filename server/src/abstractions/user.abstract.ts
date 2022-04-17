import { UserTypes } from '@constants/user.constant'

export abstract class User {
    id: number
    firstName: string
    secondName: string
    age: number
    email: string
    readonly type: UserTypes
}