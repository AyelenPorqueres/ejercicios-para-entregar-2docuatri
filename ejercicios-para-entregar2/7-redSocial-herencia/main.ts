import { Usuario } from "./usuario";
import { Influencer } from "./influencer";
import { Seguidor } from "./seguidor";

//Se instancian las clases y subclases la cual se deben pasar por parámetro los argumentos requeridos. Luego se llaman a los metodos y se imprimen por consola.
let usuario1 = new Usuario("Ayelen", "aye@gmail.com", 11522);
let usuario2 = new Usuario("Lucas", "luquitas@gmail.com", 2233);
let usuario3 = new Influencer("Kevin", "kev@gmail.com", 4455, 100000);
let usuario4 = new Seguidor("Mario", "marito@gmail", 6688, "voley");

usuario1.comentarPost("buenassss");
console.log(".................")
usuario1.publicarPost("");
console.log(".................")
usuario3.realizarColaboracion(usuario4);
console.log(".................")
usuario4.buscarContenidoRelacionado();
console.log(".................")
usuario2.comentarPost("buen remate bro")

