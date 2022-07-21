import { RoadTypes, Measures } from '@constants/road-type.constant'

export interface IRoad {
    name: string
    type: RoadTypes
    distance: number
    measure: Measures
}