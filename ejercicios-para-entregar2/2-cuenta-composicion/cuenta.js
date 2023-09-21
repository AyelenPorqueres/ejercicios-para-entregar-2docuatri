"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.mostrar = function () {
        console.log("El nombre del titular de la cuenta es: ".concat(this.getTitular(), ", saldo disponible $").concat(this.getSaldo()));
    };
    Cuenta.prototype.ingresarMonto = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Ingrese el monto que desea ingresar a su cuenta: ".concat(monto, " "));
        }
        else {
            console.log("El monto que desea ingresar debe ser mayor a 0");
        }
    };
    Cuenta.prototype.retirarMonto = function (monto) {
        if (monto > 0) {
            this.saldo -= monto;
            console.log("Ingrese el monto que desea retirar: ".concat(monto));
        }
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
