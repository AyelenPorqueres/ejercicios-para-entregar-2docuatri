//Se define la clase Producto con sus variables,su constructor y métodos.
class Producto {
    private id: number;
    private nombre: string;
    private precio: number;


    public constructor(id: number, nombre: string, precio: number) {

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }


    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }


}

//Se define la clase lista de productos
class listaDeProductos {
    private listaStock: Producto[];
    private listaVenta: Producto[];

    public constructor() {
        this.listaStock = [];
        this.listaVenta = [];
    }

    //Método para agregar los productos a la lista de stock 
    public agregarProductoStock(producto: Producto): void {
        this.listaStock.push(producto);
    }


    //Método que busca por id a los productos de la lista del stock y los elimina.
    public quitarProductoStock(id: number): void {
        for (let indice = 0; indice < this.listaStock.length; indice++) {
            if (this.listaStock[indice].getId() == id) {
                this.listaStock.splice(indice, 1)
                console.log('Su producto se elimino de la lista de stock')
            }
        }
    }


    //Método que busca por id a los productos en la lista de stock, si este se encuentra se agrega a la lista de ventas y se elimina de la lista de stock.
    public venderProducto(id: number): void {
        for (let indice = 0; indice < this.listaStock.length; indice++)
            if (this.listaStock[indice].getId() == id) {
                this.listaVenta.push(this.listaStock[indice]);
                this.listaStock.splice(indice, 1);
                break;

            }
    }


    //Se calcula el precio de cada producto que se encuentra en la lista de venta y se imprime por consola el total. 
    public imprimirProductosVendidos(): void {
        let suma: number = 0;

        console.log("-------------------LISTA DE PRODUCTOS VENDIDOS----------------------");
        console.log('--|--ID--|--NOMBRE--|--PRECIO--')

        for (let indice = 0; indice < this.listaVenta.length; indice++) {
            let prActual = this.listaVenta[indice];
            console.log(`${indice + 1} |-- ${prActual.getId()} --|----- ${prActual.getNombre()} -----|-- ${prActual.getPrecio()} --|`);

            suma += prActual.getPrecio();
        }
        console.log(`SU TOTAL ES: $${suma}, GRACIAS POR SU COMPRA `);
        console.log();
    }

}

//Se instancia la clase lista de productos
let stock = new listaDeProductos;

//Se instancia la clase alumno, pasando por parámetro los argumentos requeridos.
let lapicera = new Producto(1, "lapicera", 120.00);
let cartulina = new Producto(2, "cartulina", 70.00);
let chocolate = new Producto(3, "chocolate", 253.00);
let gaseosa = new Producto(4, "gaseosa", 540.00);

stock.agregarProductoStock(lapicera);
stock.agregarProductoStock(cartulina);
stock.agregarProductoStock(chocolate);
stock.agregarProductoStock(gaseosa);

//Se selecciona el producto vendido en la lista de stock.
stock.venderProducto(2);
//Se imprime por consola los productos que se vendieron.
stock.imprimirProductosVendidos();



