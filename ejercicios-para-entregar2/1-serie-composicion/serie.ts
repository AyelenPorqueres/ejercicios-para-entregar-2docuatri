//Se define la clase Alumno con sus variables,su constructor y métodos.
export class Serie {

    private titulo: string;
    private anioDeEstreno: number;
    private temporadas: number;
    private episodiosPorTemporada: number;
    private episodiosVistos: number;
    private finalizadaCancelada: boolean;

    public constructor(titulo: string, anioDeEstreno: number, temporadas: number, episodiosPorTemporada: number) {

        this.titulo = titulo;
        this.anioDeEstreno = anioDeEstreno;
        this.temporadas = temporadas;
        this.episodiosPorTemporada = episodiosPorTemporada;
        this.episodiosVistos = 0;
        this.finalizadaCancelada = false;

    }

    public getTitulo(): string {
        return this.titulo;

    }

    public getAnioDeEstreno(): number {
        return this.anioDeEstreno;

    }


    public getTemporadas(): number {
        return this.temporadas;

    }

    public getEpisodiosPorTemporada(): number {
        return this.episodiosPorTemporada;
    }

    public getEpisodiosVistos(): number {
        return this.episodiosVistos;
    }

    public getFinalizadaCancelada(): boolean {
        return this.finalizadaCancelada;
    }

    //Realizamos un método para mostrar la serie, la temporada y el episodio que esta viendo el usuario.
    public verEpisodio(temporada: number, episodio: number) {
        console.log(`Estas viendo la serie: ${this.getTitulo()}, en la temporada:  ${temporada}, episodio:  ${episodio}`);
        this.episodiosVistos++;
        console.log(`Los episodios que ya viste son:`, this.episodiosVistos);

    }

    //Realizamos un método que calcula cuantos episodios le quedan por ver al usuario.
    public episodiosPorVer() {
        const episodiosPorVer: number = this.episodiosPorTemporada * this.temporadas - this.episodiosVistos;

        if (episodiosPorVer > 0) {
            console.log(`Los episodios que quedan por ver son: ${episodiosPorVer}`)
        } else {
            console.log(`Terminaste de ver la temporada numero ${this.getTemporadas()}`)
        }

    }

    //Realizamos un método que calcula si el usuario termino de ver la serie. 
    public serieVista() {

        if (this.episodiosPorTemporada * this.temporadas - this.episodiosVistos == 0) {
            console.log(`Terminaste de ver la serie ${this.getTitulo()}`)
            this.finalizadaCancelada = true;
        } else {
            console.log(`¿Quiere seguir viendo ${this.getTitulo()}?`)
        }

    }

    //Método que imprime por consola la serie que esta viendo el usuario con todos sus atributos. 
    public toString(serie: Serie) {
        console.log(serie);
        console.log(`Estas viendo la serie: `, serie.getTitulo(), `la cual se estreno en el anio`, serie.getAnioDeEstreno(), `con`, serie.getTemporadas(), `temporadas y`, serie.getEpisodiosPorTemporada(), `episodios`)

    }




}



