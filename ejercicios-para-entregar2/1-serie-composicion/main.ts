import { Serie } from "./serie";

//Se instancia la clase serie, pasando por parámetros los argumentos requeridos
let TheLastOfUs = new Serie("The last of us", 2023, 1, 9);
let PeakyBlinders = new Serie("Peaky blinders", 2013, 6, 6);
let StrangerThing = new Serie("Stranger thing", 2016, 4, 9);

//Se llaman a los métodos asignandole a cada serie lo que pide cada uno y se muestran por consola. 
console.log("---------The last of us ---------- ");

TheLastOfUs.verEpisodio(1, 3);
TheLastOfUs.episodiosPorVer();
TheLastOfUs.serieVista();
TheLastOfUs.toString(TheLastOfUs);

console.log("--------- Peaky blinders ---------- ");
PeakyBlinders.verEpisodio(3, 5);
PeakyBlinders.episodiosPorVer();
PeakyBlinders.serieVista();
PeakyBlinders.toString(PeakyBlinders);

console.log("--------- Stranger thing ---------- ");
StrangerThing.verEpisodio(2, 5);
StrangerThing.episodiosPorVer();
StrangerThing.serieVista();
StrangerThing.toString(StrangerThing)