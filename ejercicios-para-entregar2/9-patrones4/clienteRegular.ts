import { Cliente } from "./cliente";

//Se crea una clase llamada cliente regular, la cual implementa el método de la clase cliente, este mismo no realiza ningún tipo de descuento.
export class ClienteRegular implements Cliente {
  //no tiene descuento
  public comprarProducto(precio: number): number {
    let productoDescuento: number = precio;
    return productoDescuento;
  }
}