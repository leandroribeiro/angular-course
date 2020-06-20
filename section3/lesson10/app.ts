class Spacecraft {
    propulsor: string

    constructor(propulsor: string) {
        this.propulsor = propulsor
    }

    jumpIntoHyperspace() {
        console.log("Entering hyperspace with " + this.propulsor)
    }
}

class SpacecraftSimple {
    constructor(public propulsor: string) {
    }
}

interface Containership {
    cargoContainers: number
}

interface Smugglership extends Containership {
    hiddenContainers:number
}

class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number;

    constructor() {
        super("hyperdrive");
        this.cargoContainers = 4;
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace();
        } else {
            console.log("Failed")
        }
    }
}

function goodForTheJob(ship: Containership): boolean {
    return ship.cargoContainers > 2
}

let falcon = new MillenniumFalcon();

falcon.jumpIntoHyperspace();

console.log(goodForTheJob(falcon));
