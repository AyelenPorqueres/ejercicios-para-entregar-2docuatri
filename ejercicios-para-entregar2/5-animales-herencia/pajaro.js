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
exports.Pajaro = void 0;
var animal_1 = require("./animal");
//Se crea una subclase Pajaro con sus atributos la cual tambien hereda propiedades y métodos de su clase padre Animal.
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, raza, tipoDePico) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tipoDePico = tipoDePico;
        return _this;
    }
    Pajaro.prototype.getTipoDepico = function () {
        return this.tipoDePico;
    };
    Pajaro.prototype.setTipoDePico = function (tipoDePico) {
        this.tipoDePico = tipoDePico;
    };
    //Método que muestra el sonido que hace el pajaro.
    Pajaro.prototype.hacerSonido = function () {
        console.log("El sonido de ".concat(this.nombre, " es pio pio"));
    };
    //Método que indica que el pajaro se esta moviendo
    Pajaro.prototype.moverse = function () {
        console.log("".concat(this.nombre, " se esta moviendo"));
    };
    //Método que muestra que el pajaro esta volando.
    Pajaro.prototype.volar = function (volar) {
        console.log("".concat(this.nombre, " esta aprendiendo a ").concat(volar));
    };
    Pajaro.prototype.mostrarPajaro = function () {
        console.log("DATOS DEL PAJARO:");
        console.log("Nombre: ".concat(this.nombre, ", edad: ").concat(this.edad, ", raza: ").concat(this.raza, ", tipoDePico: ").concat(this.tipoDePico));
    };
    return Pajaro;
}(animal_1.Animal));
exports.Pajaro = Pajaro;
