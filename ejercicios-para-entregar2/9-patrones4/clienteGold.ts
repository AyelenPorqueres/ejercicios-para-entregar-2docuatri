import { Cliente } from "./cliente";

//Se crea una clase llamada cliente gold, la cual implementa el método de la clase cliente, este mismo evalua de cuanto es el precio del producto, si es mayor a $10.0000 se realiza un descuento del 20%

export class ClienteGold implements Cliente {
  //descuento 20% producto mayores a 10k
  public comprarProducto(precio: number): number {
    if (precio > 10000) {
      return precio * 0.8
    }
    return precio;
  }
}