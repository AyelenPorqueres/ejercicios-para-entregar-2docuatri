import { Cliente } from "./cliente";

//Se crea una clase context con el diseño de patron strategy, este mismo crea un atributo privado cliente de tipo Cliente el cual implementa su interfaz.
export class Context {
    private cliente: Cliente;
    constructor() {
    }
    //Método que implementa una estrategia a la interfaz cliente 
    setEstrategia(cliente: Cliente): void {
        this.cliente = cliente;
    }
    //Método que aplica la estrategia implementada anteriormente a un precio.
    aplicarEstrategia(precio: number): number {
        return this.cliente.comprarProducto(precio)
    }
}
