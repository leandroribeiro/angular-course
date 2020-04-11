class Spacecraft {
    public engine: string

    constructor(engine: string) {
        this.engine = engine
    }

    jumpIntoHyperSpace() {
        console.log(`Entering hyperspace with ${this.engine}`)
    }
}

interface ContainerShip {
    cargoContainers: number
}

export {Spacecraft, ContainerShip}