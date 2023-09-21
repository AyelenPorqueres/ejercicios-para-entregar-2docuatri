import { Cliente } from "./cliente";

//Se crea una clase llamada cliente platino, la cual implementa el método de la clase cliente, este mismo realiza  el 20% de descuento a cualquier compra que realice dicho cliente.

export class ClientePlatino implements Cliente {
  //descuento 20% a todo
  public comprarProducto(precio: number): number {
    return precio * 0.8;
  }

}