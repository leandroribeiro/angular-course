import {Spacecraft, ContainerShip} from "./base-ships";
import {MilleniumFalcon} from "./starfighters";

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()


let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()


let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)