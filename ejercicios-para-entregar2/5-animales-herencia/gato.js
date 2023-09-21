"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var animal_1 = require("./animal");
//Se crea una subclase Gato con sus atributos la cual tambie hereda propiedades y métodos de su clase padre Animal.
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, edad, raza, pelaje) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.pelaje = pelaje;
        return _this;
    }
    Gato.prototype.getPelaje = function () {
        return this.pelaje;
    };
    Gato.prototype.setPelaje = function (pelaje) {
        this.pelaje = pelaje;
    };
    //Método que muestra el sonido que hace el gato.
    Gato.prototype.hacerSonido = function () {
        console.log("El sonido de ".concat(this.nombre, " es miau miau"));
    };
    //Método que indica que el gato se esta moviendo
    Gato.prototype.moverse = function () {
        console.log("".concat(this.nombre, " se esta moviendo"));
    };
    //Método que indica con que objeto esta jugando el gato.
    Gato.prototype.jugarConJuguete = function (objeto) {
        console.log("".concat(this.nombre, " esta jugando con el ").concat(objeto));
    };
    Gato.prototype.mostrarGato = function () {
        console.log("DATOS DEL GATO:");
        console.log("Nombre: ".concat(this.nombre, ", edad: ").concat(this.edad, ", raza: ").concat(this.raza, ", pelaje: ").concat(this.pelaje));
    };
    return Gato;
}(animal_1.Animal));
exports.Gato = Gato;
