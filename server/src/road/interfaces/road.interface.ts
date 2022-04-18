import { RoadTypes, Measures } from '@constants/road-type.constant'

export interface IRoad {
    id: number
    type: RoadTypes
    distance: number
    measure: Measures
}