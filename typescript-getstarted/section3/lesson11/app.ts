class Spacecraft {
    public engine: string

    constructor(engine: string) {
        this.engine = engine
    }

    jumpIntoHyperSpace() {
        console.log(`Entering hyperspace with ${this.engine}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

class MilleniumFalcon extends Spacecraft implements ContainerShip{

    cargoContainers: number;

    constructor() {
        super('hyperdrive');
        this.cargoContainers = 2
    }

    jumpIntoHyperSpace() {
        if (Math.random() >= 0.5)
            super.jumpIntoHyperSpace();
        else
            console.log("Failed");
    }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()

interface ContainerShip {
    cargoContainers: number
}

let goodForTheJob = (ship:ContainerShip) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon)  ? 'yes' : 'no'}`)