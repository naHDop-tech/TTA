import { UserTypes } from '@constants/user.constant'

export abstract class User {
    name: string
    age: number
    readonly type: UserTypes
}