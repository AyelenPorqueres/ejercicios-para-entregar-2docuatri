//Se define la clase Producto con sus variables,su constructor y métodos.
var Producto = /** @class */ (function () {
    function Producto(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    Producto.prototype.getId = function () {
        return this.id;
    };
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    return Producto;
}());
//Se define la clase lista de productos
var listaDeProductos = /** @class */ (function () {
    function listaDeProductos() {
        this.listaStock = [];
        this.listaVenta = [];
    }
    //Método para agregar los productos a la lista de stock 
    listaDeProductos.prototype.agregarProductoStock = function (producto) {
        this.listaStock.push(producto);
    };
    //Método que busca por id a los productos de la lista del stock y los elimina.
    listaDeProductos.prototype.quitarProductoStock = function (id) {
        for (var indice = 0; indice < this.listaStock.length; indice++) {
            if (this.listaStock[indice].getId() == id) {
                this.listaStock.splice(indice, 1);
                console.log('Su producto se elimino de la lista de stock');
            }
        }
    };
    //Método que busca por id a los productos en la lista de stock, si este se encuentra se agrega a la lista de ventas y se elimina de la lista de stock.
    listaDeProductos.prototype.venderProducto = function (id) {
        for (var indice = 0; indice < this.listaStock.length; indice++)
            if (this.listaStock[indice].getId() == id) {
                this.listaVenta.push(this.listaStock[indice]);
                this.listaStock.splice(indice, 1);
                break;
            }
    };
    //Se calcula el precio de cada producto que se encuentra en la lista de venta y se imprime por consola el total. 
    listaDeProductos.prototype.imprimirProductosVendidos = function () {
        var suma = 0;
        console.log("-------------------LISTA DE PRODUCTOS VENDIDOS----------------------");
        console.log('--|--ID--|--NOMBRE--|--PRECIO--');
        for (var indice = 0; indice < this.listaVenta.length; indice++) {
            var prActual = this.listaVenta[indice];
            console.log("".concat(indice + 1, " |-- ").concat(prActual.getId(), " --|----- ").concat(prActual.getNombre(), " -----|-- ").concat(prActual.getPrecio(), " --|"));
            suma += prActual.getPrecio();
        }
        console.log("SU TOTAL ES: $".concat(suma, ", GRACIAS POR SU COMPRA "));
        console.log();
    };
    return listaDeProductos;
}());
//Se instancia la clase lista de productos
var stock = new listaDeProductos;
//Se instancia la clase alumno, pasando por parámetro los argumentos requeridos.
var lapicera = new Producto(1, "lapicera", 120.00);
var cartulina = new Producto(2, "cartulina", 70.00);
var chocolate = new Producto(3, "chocolate", 253.00);
var gaseosa = new Producto(4, "gaseosa", 540.00);
stock.agregarProductoStock(lapicera);
stock.agregarProductoStock(cartulina);
stock.agregarProductoStock(chocolate);
stock.agregarProductoStock(gaseosa);
//Se selecciona el producto vendido en la lista de stock.
stock.venderProducto(2);
//Se imprime por consola los productos que se vendieron.
stock.imprimirProductosVendidos();
