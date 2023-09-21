import { Cancion } from "./cancion";


let cancion1 = new Cancion("El revelde","La renga");
let cancion2 = new Cancion();
let cancion3 = new Cancion("Ala Delta","Divididos");

cancion1.mostrarTitulo();
cancion1.mostrarAutor();

cancion2.ponerAutor("Mercedes Sosa");
cancion2.ponerTitulo("Zona de promesas");
cancion2.mostrarTitulo();
cancion2.mostrarAutor();
