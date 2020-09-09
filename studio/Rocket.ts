import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(inputName: string, inputTotalCapacityKg: number) {
        this.name = inputName;
        this.totalCapacityKg = inputTotalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let total: number = 0;
        for (let i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd( item: Payload ): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }

    addCargo( cargo: Cargo ): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }

    addAstronaut( astronaut: Astronaut ): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}