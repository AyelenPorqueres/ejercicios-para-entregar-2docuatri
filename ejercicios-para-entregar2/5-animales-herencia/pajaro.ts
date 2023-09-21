import { Animal } from "./animal";

//Se crea una subclase Pajaro con sus atributos la cual tambien hereda propiedades y métodos de su clase padre Animal.
export class Pajaro extends Animal {
    private tipoDePico: string;

    public constructor(nombre: string, edad: number, raza: string, tipoDePico: string) {
        super(nombre, edad, raza);
        this.tipoDePico = tipoDePico;
    }

    public getTipoDepico(): string {
        return this.tipoDePico;

    }

    public setTipoDePico(tipoDePico: string): void {
        this.tipoDePico = tipoDePico;

    }

    //Método que muestra el sonido que hace el pajaro.
    public hacerSonido(): void {
        console.log(`El sonido de ${this.nombre} es pio pio`);
    }

    //Método que indica que el pajaro se esta moviendo
    public moverse(): void {
        console.log(`${this.nombre} se esta moviendo`);
    }

    //Método que muestra que el pajaro esta volando.
    public volar(volar: string) {
        console.log(`${this.nombre} esta aprendiendo a ${volar}`)

    }

    mostrarPajaro(): void {

        console.log("DATOS DEL PAJARO:")
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, raza: ${this.raza}, tipoDePico: ${this.tipoDePico}`)

    }
}