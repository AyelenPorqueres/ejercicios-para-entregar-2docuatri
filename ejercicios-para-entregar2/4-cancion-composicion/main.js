"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cancion_1 = require("./cancion");
var cancion1 = new cancion_1.Cancion("El revelde", "La renga");
var cancion2 = new cancion_1.Cancion();
var cancion3 = new cancion_1.Cancion("Ala Delta", "Divididos");
cancion1.mostrarTitulo();
cancion1.mostrarAutor();
cancion2.ponerAutor("Mercedes Sosa");
cancion2.ponerTitulo("Zona de promesas");
cancion2.mostrarTitulo();
cancion2.mostrarAutor();
