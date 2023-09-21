import { Usuario } from "./usuario";

//Se crea un subclase Influencer con sus atributos, la cual tambien hereda de la clase padre Usuario sus atributos.
export class Influencer extends Usuario {
    private numeroDeSeguidores: number;

    public constructor(nombre: string, email: string, contraseña: number, numeroDeSeguidores: number) {
        super(nombre, email, contraseña);

        this.numeroDeSeguidores = numeroDeSeguidores;
    }

    //Se realiza un método que imprime con que usuario realizara una colaboracion el influencer y cuantos numeros de seguidores tiene el mismo.
    public realizarColaboracion(colaborador: Usuario) {
        console.log(` El influencer ${this.nombre} el cual tiene ${this.numeroDeSeguidores} realizara una colaboracion con ${colaborador.getNombre()}`)
    }
}