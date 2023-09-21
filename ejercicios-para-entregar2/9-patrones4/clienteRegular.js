"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRegular = void 0;
var ClienteRegular = /** @class */ (function () {
    function ClienteRegular() {
    }
    //no tiene descuento
    ClienteRegular.prototype.comprarProducto = function (precio) {
        var productoDescuento = precio;
        return productoDescuento;
    };
    return ClienteRegular;
}());
exports.ClienteRegular = ClienteRegular;
