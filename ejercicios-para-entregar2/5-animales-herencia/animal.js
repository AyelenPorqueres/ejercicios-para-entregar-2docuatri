"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
//Se crea una clase padre abstracta de animal con sus atributos, constructor y métodos.
var Animal = /** @class */ (function () {
    function Animal(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    Animal.prototype.getNombre = function () {
        return this.nombre;
    };
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.getRaza = function () {
        return this.raza;
    };
    Animal.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Animal.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Animal.prototype.setRaza = function (raza) {
        this.raza = raza;
    };
    return Animal;
}());
exports.Animal = Animal;
