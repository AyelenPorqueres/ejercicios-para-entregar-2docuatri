"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientePlatino = void 0;
var ClientePlatino = /** @class */ (function () {
    function ClientePlatino() {
    }
    //descuento 20% a todo
    ClientePlatino.prototype.comprarProducto = function (precio) {
        return precio * 0.8;
    };
    return ClientePlatino;
}());
exports.ClientePlatino = ClientePlatino;
