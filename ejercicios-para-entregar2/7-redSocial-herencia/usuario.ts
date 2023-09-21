//Se crea la clase padre Usuario con sus atributos, constructor y métodos.
export class Usuario {
    protected nombre: string;
    protected email: string;
    protected contraseña: number;

    public constructor(nombre: string, email: string, contraseña: number) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    public getNombre(): string {
        return this.nombre;

    }

    //Método que muestra el post que publico el usuario.
    public publicarPost(post: string): void {
        console.log(`${this.nombre} publico el siguiente post:`, post);
    }

    //Método que muestra el comentario que realizo el usuario.
    public comentarPost(comentar: string): void {
        console.log(`${this.nombre} realizo  el siguiente comentario:`, comentar);

    }
}