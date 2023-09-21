import { Usuario } from "./usuario";

//Se crea un subclase Seguidor con sus atributos, la cual tambien hereda de la clase padre Usuario sus atributos.
export class Seguidor extends Usuario {
    private intereses: string;

    public constructor(nombre: string, email: string, contraseña: number, intereses: string) {
        super(nombre, email, contraseña);

        this.intereses = intereses;
    }

    //Método para buscar contenido relacionado a los intereses de cada usuario.
    public buscarContenidoRelacionado() {
        console.log(`Se buscara contenido relacionado a los intereses de ${this.getNombre()}: ${this.intereses}`)
    }
}