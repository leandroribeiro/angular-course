"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(engine) {
        this.engine = engine;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.engine);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
