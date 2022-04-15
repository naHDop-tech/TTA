import { RoadTypes, Measures } from '@constants/road-type.constant'

export abstract class Road {
    id: number
    type: RoadTypes
    distance: number
    measure: Measures
}