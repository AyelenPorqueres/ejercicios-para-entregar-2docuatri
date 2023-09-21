import { Gato } from "./gato";
import { Perro } from "./perro";
import { Pajaro } from "./pajaro";

//Se instancian las subclases Gato, Perro, y Pajaro pasando por parámetro los atributos requeridos, luego se llaman a los métodos de cada una y se muestran en consola.
let gato1 = new Gato("Arturo", 1, "Bombay", "Negro azabache");
let perro1 = new Perro("Lena", 4, "Beagle", "Mediano");
let pajaro1 = new Pajaro("Piolin", 2, "Canario", "Pico corto");


console.log("---------GATO----------");

gato1.hacerSonido();
gato1.moverse();
gato1.jugarConJuguete("Raton a cuerda");
gato1.mostrarGato();

console.log("---------PERRO----------");

perro1.hacerSonido();
perro1.moverse();
perro1.buscarObjeto("Pelota");
perro1.mostrarPerro();

console.log("---------PÁJARO----------");

pajaro1.hacerSonido();
pajaro1.moverse();
pajaro1.volar("volar");
pajaro1.mostrarPajaro();


