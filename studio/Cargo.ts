import { Payload } from './Payload';

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor(inputMassKg: number, inputMaterial: string) {
        this.massKg = inputMassKg;
        this.material = inputMaterial;
    }
}