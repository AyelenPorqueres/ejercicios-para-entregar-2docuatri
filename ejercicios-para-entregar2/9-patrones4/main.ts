import * as rls from 'readline-sync';
import { ClienteRegular } from "./clienteRegular";
import { ClienteGold } from "./clienteGold";
import { ClientePlatino } from "./clientePlatino";
import { Context } from "./context";

//Método que ejecuta 3 veces un bucle for para 3 clientes diferentes consultando que tipo es (gold,platino o regular), el precio del producto y por último según el cliente aplicara un descuento o no.
for (let i = 0; i < 3; i++) {
  let cliente: string = rls.question('ingrece tipo de cliente:');
  let precioProducto: number = rls.questionInt('ingrece precio del producto:');
  let descuento = new Context();

  //En el siguiente método según que tipo de cliente es se le aplicara una estrategia de descuento al precio del producto. Luego cada una se imprimira por consola.
  if (cliente == 'regular') {
    descuento.setEstrategia(new ClienteRegular);
    console.log(descuento.aplicarEstrategia(precioProducto));
  } else if (cliente == 'gold') {
    descuento.setEstrategia(new ClienteGold);
    console.log(descuento.aplicarEstrategia(precioProducto));
  } else if (cliente == 'platino') {
    descuento.setEstrategia(new ClientePlatino);
    console.log(descuento.aplicarEstrategia(precioProducto));
  }
}
