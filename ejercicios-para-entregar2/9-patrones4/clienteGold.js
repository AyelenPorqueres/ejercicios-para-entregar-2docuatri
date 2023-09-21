"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteGold = void 0;
var ClienteGold = /** @class */ (function () {
    function ClienteGold() {
    }
    //descuento 20% producto mayores a 10k
    ClienteGold.prototype.comprarProducto = function (precio) {
        if (precio > 10000) {
            return precio * 0.8;
        }
        return precio;
    };
    return ClienteGold;
}());
exports.ClienteGold = ClienteGold;
