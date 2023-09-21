//Se crea una clase padre abstracta de animal con sus atributos, constructor y métodos.
export abstract class Animal {
    protected nombre: string;
    protected edad: number;
    protected raza: string;

    public constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;

    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public getRaza(): string {
        return this.raza;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public setRaza(raza: string): void {
        this.raza = raza;
    }

    //Se declaran los métodos abstractos que luego serán implementados en las subclases.
    public abstract hacerSonido(): void;
    public abstract moverse(): void;



}