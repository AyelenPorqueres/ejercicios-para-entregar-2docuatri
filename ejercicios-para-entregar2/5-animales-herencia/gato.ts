import { Animal } from "./animal";

//Se crea una subclase Gato con sus atributos la cual tambie hereda propiedades y métodos de su clase padre Animal.
export class Gato extends Animal {
    private pelaje: string;

    public constructor(nombre: string, edad: number, raza: string, pelaje: string) {
        super(nombre, edad, raza);
        this.pelaje = pelaje;
    }

    public getPelaje(): string {
        return this.pelaje;

    }

    public setPelaje(pelaje: string): void {
        this.pelaje = pelaje;

    }

    //Método que muestra el sonido que hace el gato.
    public hacerSonido(): void {
        console.log(`El sonido de ${this.nombre} es miau miau`);
    }

    //Método que indica que el gato se esta moviendo
    public moverse(): void {
        console.log(`${this.nombre} se esta moviendo`);
    }

    //Método que indica con que objeto esta jugando el gato.
    public jugarConJuguete(objeto: string) {
        console.log(`${this.nombre} esta jugando con el ${objeto}`)
    }

    mostrarGato(): void {
        console.log("DATOS DEL GATO:")
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, raza: ${this.raza}, pelaje: ${this.pelaje}`)

    }
}