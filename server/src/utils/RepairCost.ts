import { Vehicle } from '@root/abstractions/vehicle.abstract'

export class RepairCost {
    private isLessThenThree: boolean;
    private isLessThenSix: boolean;
    private isLessThenTen: boolean;
    private isLessThenTwelve: boolean;
    private vehicle: Vehicle;

    constructor(vehicle: Vehicle) {
        this.vehicle = vehicle
        this.isLessThenThree = new Date().getFullYear() - this.vehicle.year.getFullYear() <= 3
        this.isLessThenSix = new Date().getFullYear() - this.vehicle.year.getFullYear() <= 6
        this.isLessThenTen = new Date().getFullYear() - this.vehicle.year.getFullYear() <= 10
        this.isLessThenTwelve = new Date().getFullYear() - this.vehicle.year.getFullYear() <= 12
    }

    get currentRepairPrice(): number {
        if (this.isLessThenThree) {
            return this.repairPrice
        }
        if (this.isLessThenSix) {
            return this.repairPrice * 2
        }
        if (this.isLessThenSix) {
            return this.repairPrice * 3
        }
        if (this.isLessThenTen) {
            return this.repairPrice * 5
        }
        if (this.isLessThenTwelve) {
            return this.repairPrice * 7
        }
    }

    private get repairPrice(): number {
        return this.vehicle.price * 0.3
    }
}