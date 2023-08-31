//se define la clase Alumno con sus variables,su constructor y métodos.
class Alumno {

    private nombre: string;
    private dni: number;
    private examenesRendidos: number[];


    public constructor(nombre: string, dni: number, examenesRendidos: number[]) {
        this.dni = dni;
        this.nombre = nombre;
        this.examenesRendidos = examenesRendidos;

    }

    public getDni(): number {
        return this.dni;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public obtenerNotasExamen(): number[] {
        return this.examenesRendidos;
    }

    public getPromedio(): number {
        let promedio: number = 0;
        for (let index = 0; index < this.examenesRendidos.length; index++) {
            promedio += this.examenesRendidos[index];
        }
        promedio = promedio / this.examenesRendidos.length;
        return promedio;
    }

}


//Se define la clase gestor de legajos
class GestorDeLegajos {
    private alumnos: Alumno[];

    public constructor() {
        this.alumnos = [];

    }

    //Realizamos un método para dar de alta a los alumnos
    public altaAlumnos(alumno: Alumno) {
        this.alumnos.push(alumno);
    }

    //Método que busca a los alumnos por dni y retorna el promedio individual
    public promedioAlumno(dni: number): number {
        let promedio: number = 0;
        for (let index = 0; index < this.alumnos.length; index++) {
            let alumnoActual = this.alumnos[index];
            if (alumnoActual.getDni() === dni) {
                promedio = alumnoActual.getPromedio()
            }
        }
        return promedio;
    }

    //Método que retorna el promedio general de todos los alumnos 
    public promedioGeneral(): number {
        let promedio: number = 0;
        for (let index = 0; index < this.alumnos.length; index++) {
            let alumnoActual = this.alumnos[index];
            promedio += alumnoActual.getPromedio()
        }
        promedio = promedio / this.alumnos.length;

        return promedio;
    }

}
//Se instancia la clase gestor de legajos
let legajo = new GestorDeLegajos();

//Se instancia la clase alumno, pasando por parámetro los argumentos requeridos.
let maria = new Alumno('Maria', 41247896, [4, 8, 7, 10]);
let antonia = new Alumno('Antonia', 41254300, [7, 6, 9, 8]);
let enzo = new Alumno('Enzo', 4185696, [5, 9, 8, 8]);
let lionel = new Alumno('Lionel', 41388744, [2, 7, 7, 8]);


legajo.altaAlumnos(maria);
legajo.altaAlumnos(antonia);
legajo.altaAlumnos(enzo);
legajo.altaAlumnos(lionel);

//Se cálcula el promedio por alumno utilizando el dni y se imprime en la consola.
console.log("PROMEDIO POR ALUMNO")
console.log(legajo.promedioAlumno(41388744));
console.log(legajo.promedioAlumno(41254300));
console.log(legajo.promedioAlumno(4185696));
console.log(legajo.promedioAlumno(41247896));

//Se cálcula el promedio general y se imprime por consola.
console.log("PROMEDIO GENERAL")
console.log(legajo.promedioGeneral());