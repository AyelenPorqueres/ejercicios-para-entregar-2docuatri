import { Cuenta } from "./cuenta";

//Se instancia la clase cuenta pasando por parámetros los argumentos requeridos.
let titular1 = new Cuenta("Ayelen Porqueres", 120000);
let titular2 = new Cuenta("Lorena Planes", 140000);

//Se llaman a los métodos asignandole a los titulares de la cuenta los montos a retirar e ingresar y se imprimen por consola.
console.log("--------TITULAR UNO--------")
titular1.mostrar()
titular1.ingresarMonto(15000)
titular1.mostrar()
titular1.retirarMonto(5000)
titular1.mostrar()

console.log("--------TITULAR DOS--------")
titular2.mostrar()
titular2.ingresarMonto(7000)
titular2.mostrar()
titular2.retirarMonto(20000)
titular2.mostrar()



