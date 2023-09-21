//Se realiza una interface llamada Cliente, la cual determina un metodo llamado comprarProducto el cual pasa por parámetro un precio.
export interface Cliente {
    comprarProducto(precio: number): number;
}