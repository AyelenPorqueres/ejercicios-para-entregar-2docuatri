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
exports.Perro = void 0;
var animal_1 = require("./animal");
//Se crea una subclase Perro con sus atributos la cual tambie hereda propiedades y métodos de su clase padre Animal.
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, edad, raza, tamanio) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tamanio = tamanio;
        return _this;
    }
    Perro.prototype.getTamanio = function () {
        return this.tamanio;
    };
    Perro.prototype.setTamanio = function (tamanio) {
        this.tamanio = tamanio;
    };
    //Método que muestra el sonido que hace el perro.
    Perro.prototype.hacerSonido = function () {
        console.log("El sonido de ".concat(this.nombre, " es guau guau"));
    };
    //Método que indica que el perro se esta moviendo
    Perro.prototype.moverse = function () {
        console.log("".concat(this.nombre, " se esta moviendo"));
    };
    //Método que muestra que objeto encontro el Perro
    Perro.prototype.buscarObjeto = function (objeto) {
        console.log("".concat(this.nombre, " encontro su ").concat(objeto));
    };
    Perro.prototype.mostrarPerro = function () {
        console.log("DATOS DEL PERRO:");
        console.log("Nombre: ".concat(this.nombre, ", edad: ").concat(this.edad, ", raza: ").concat(this.raza, ", tamanio: ").concat(this.tamanio));
    };
    return Perro;
}(animal_1.Animal));
exports.Perro = Perro;
