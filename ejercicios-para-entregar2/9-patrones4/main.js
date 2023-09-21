"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var clienteRegular_1 = require("./clienteRegular");
var clienteGold_1 = require("./clienteGold");
var clientePlatino_1 = require("./clientePlatino");
var context_1 = require("./context");
for (var i = 0; i < 3; i++) {
    var cliente = rls.question('ingrece tipo de cliente:');
    var precioProducto = rls.questionInt('ingrece precio del producto:');
    var descuento = new context_1.Context();
    if (cliente == 'regular') {
        descuento.setEstrategia(new clienteRegular_1.ClienteRegular);
        console.log(descuento.aplicarEstrategia(precioProducto));
    }
    else if (cliente == 'gold') {
        descuento.setEstrategia(new clienteGold_1.ClienteGold);
        console.log(descuento.aplicarEstrategia(precioProducto));
    }
    else if (cliente == 'platino') {
        descuento.setEstrategia(new clientePlatino_1.ClientePlatino);
        console.log(descuento.aplicarEstrategia(precioProducto));
    }
}
