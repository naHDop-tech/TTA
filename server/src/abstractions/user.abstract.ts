import { UserTypes } from '@constants/user.constant'

export abstract class User {
    id: number
    name: string
    age: number
    readonly type: UserTypes
}