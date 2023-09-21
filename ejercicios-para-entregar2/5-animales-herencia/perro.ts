import { Animal } from "./animal";

//Se crea una subclase Perro con sus atributos la cual tambie hereda propiedades y métodos de su clase padre Animal.
export class Perro extends Animal {
    private tamanio: string;

    public constructor(nombre: string, edad: number, raza: string, tamanio: string) {
        super(nombre, edad, raza);
        this.tamanio = tamanio;
    }


    public getTamanio(): string {
        return this.tamanio;
    }

    public setTamanio(tamanio: string): void {
        this.tamanio = tamanio;
    }

    //Método que muestra el sonido que hace el perro.
    public hacerSonido(): void {
        console.log(`El sonido de ${this.nombre} es guau guau`);

    }

    //Método que indica que el perro se esta moviendo
    public moverse(): void {
        console.log(`${this.nombre} se esta moviendo`);

    }


    //Método que muestra que objeto encontro el Perro
    public buscarObjeto(objeto: string): void {
        console.log(`${this.nombre} encontro su ${objeto}`);

    }


    mostrarPerro(): void {
        console.log("DATOS DEL PERRO:")
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, raza: ${this.raza}, tamanio: ${this.tamanio}`)

    }
}