"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("./usuario");
var influencer_1 = require("./influencer");
var seguidor_1 = require("./seguidor");
var usuario1 = new usuario_1.Usuario("Ayelen", "aye@gmail.com", 11522);
var usuario2 = new usuario_1.Usuario("Lucas", "luquitas@gmail.com", 2233);
var usuario3 = new influencer_1.Influencer("Kevin", "kev@gmail.com", 4455, 100000);
var usuario4 = new seguidor_1.Seguidor("Mario", "marito@gmail", 6688, "voley");
usuario1.comentarPost("buenassss");
console.log(".................");
usuario1.publicarPost("");
console.log(".................");
usuario3.realizarColaboracion(usuario4);
console.log(".................");
usuario4.buscarContenidoRelacionado();
console.log(".................");
usuario2.comentarPost("buen remate bro");
