export class Cancion{
    private titulo: string;
    private autor: string;

    public constructor (titulo?: string, autor?: string){
        if(titulo && autor){
            this.titulo = titulo;
            this.autor = autor;
        }else{
            this.titulo = "";
            this.autor = "";
        }
        
    }
    

    public getTitulo():string{
        return this.titulo;
    }

    public getAutor(): string{
        return this.autor;
    }

    public mostrarTitulo(){
        console.log(`El titulo de la cancion es: ${this.titulo}`)

    }

    public mostrarAutor(){
        console.log(`El autor de la cancion es: ${this.autor}`)

    }

    public ponerTitulo(titulo:string):void{
        this.titulo = titulo;

    }

    public ponerAutor(autor:string): void{
        this.autor = autor;

    }
} 