import { UserTypes } from '@root/constants/customer.constant'

export abstract class User {
    id: number
    firstName: string
    secondName: string
    age: number
    email: string
    readonly type: UserTypes
}