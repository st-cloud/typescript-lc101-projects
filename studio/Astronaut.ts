import { Payload } from './Payload';

//why bother importing payload interface?

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(inputMassKg: number, inputName: string) {
        this.massKg = inputMassKg;
        this.name = inputName;
    }
}