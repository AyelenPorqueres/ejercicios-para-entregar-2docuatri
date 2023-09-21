import { CuentaAhorro } from "./cuentaAhorro";
import { CuentaCorriente } from "./cuentaCorriente";

//Se instancian las subclases pasandole por parámetro los argumentos requeridos, luego se llaman a los métodos de cada una y se muestran por consola.
let cuenta1 = new CuentaAhorro(0, 0, "Lucas Fava", 0);
let cuenta2 = new CuentaCorriente(0, 0, "Kevin Frias", 0);

cuenta1.depositar(10000);
console.log("--------------------------------");
cuenta1.calcularInteres(1000000);
console.log("--------------------------------");
cuenta1.retirar(5000);
console.log("--------------------------------");

cuenta2.depositar(50000);
console.log("--------------------------------");
cuenta2.aplicarInteres();
console.log("--------------------------------");
cuenta2.retirar(15000);