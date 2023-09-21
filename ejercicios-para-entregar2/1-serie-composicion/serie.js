"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(titulo, anioDeEstreno, temporadas, episodiosPorTemporada) {
        this.titulo = titulo;
        this.anioDeEstreno = anioDeEstreno;
        this.temporadas = temporadas;
        this.episodiosPorTemporada = episodiosPorTemporada;
        this.episodiosVistos = 0;
        this.finalizadaCancelada = false;
    }
    Serie.prototype.getTitulo = function () {
        return this.titulo;
    };
    Serie.prototype.getAnioDeEstreno = function () {
        return this.anioDeEstreno;
    };
    Serie.prototype.getTemporadas = function () {
        return this.temporadas;
    };
    Serie.prototype.getEpisodiosPorTemporada = function () {
        return this.episodiosPorTemporada;
    };
    Serie.prototype.getEpisodiosVistos = function () {
        return this.episodiosVistos;
    };
    Serie.prototype.getFinalizadaCancelada = function () {
        return this.finalizadaCancelada;
    };
    Serie.prototype.verEpisodio = function (temporada, episodio) {
        console.log("Estas viendo la serie: ".concat(this.getTitulo(), ", en la temporada:  ").concat(temporada, ", episodio:  ").concat(episodio));
        this.episodiosVistos++;
        console.log("Los episodios que ya vistes son:", this.episodiosVistos);
    };
    Serie.prototype.episodiosPorVer = function () {
        var episodiosPorVer = this.episodiosPorTemporada * this.temporadas - this.episodiosVistos;
        if (episodiosPorVer > 0) {
            console.log("Los episodios que quedan por ver son: ".concat(episodiosPorVer));
        }
        else {
            console.log("Terminaste de ver la temporada numero ".concat(this.getTemporadas()));
        }
    };
    Serie.prototype.serieVista = function () {
        if (this.episodiosPorTemporada * this.temporadas - this.episodiosVistos == 0) {
            console.log("Terminaste de ver la serie ".concat(this.getTitulo()));
            this.finalizadaCancelada = true;
        }
        else {
            console.log("\u00BFQuiere seguir viendo ".concat(this.getTitulo(), "?"));
        }
    };
    Serie.prototype.toString = function (serie) {
        console.log(serie);
        console.log("Estas viendo la serie: ", serie.getTitulo(), "la cual se estreno en el anio", serie.getAnioDeEstreno(), "con", serie.getTemporadas(), "temporadas y", serie.getEpisodiosPorTemporada(), "episodios");
    };
    return Serie;
}());
exports.Serie = Serie;
