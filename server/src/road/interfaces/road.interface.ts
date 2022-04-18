import { RoadTypes, Measures } from '@constants/road-type.constant'

export interface IRoad {
    type: RoadTypes
    distance: number
    measure: Measures
}