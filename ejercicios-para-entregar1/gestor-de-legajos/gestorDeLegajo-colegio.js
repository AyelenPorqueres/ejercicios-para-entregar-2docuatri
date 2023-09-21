//se define la clase Alumno con sus variables,su constructor y métodos.
var Alumno = /** @class */ (function () {
    function Alumno(nombre, dni, examenesRendidos) {
        this.dni = dni;
        this.nombre = nombre;
        this.examenesRendidos = examenesRendidos;
    }
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.obtenerNotasExamen = function () {
        return this.examenesRendidos;
    };
    Alumno.prototype.getPromedio = function () {
        var promedio = 0;
        for (var index = 0; index < this.examenesRendidos.length; index++) {
            promedio += this.examenesRendidos[index];
        }
        promedio = promedio / this.examenesRendidos.length;
        return promedio;
    };
    return Alumno;
}());
//Se define la clase gestor de legajos
var GestorDeLegajos = /** @class */ (function () {
    function GestorDeLegajos() {
        this.alumnos = [];
    }
    //Realizamos un método para dar de alta a los alumnos
    GestorDeLegajos.prototype.altaAlumnos = function (alumno) {
        this.alumnos.push(alumno);
    };
    //Método que busca a los alumnos por dni y retorna el promedio individual
    GestorDeLegajos.prototype.promedioAlumno = function (dni) {
        var promedio = 0;
        for (var index = 0; index < this.alumnos.length; index++) {
            var alumnoActual = this.alumnos[index];
            if (alumnoActual.getDni() === dni) {
                promedio = alumnoActual.getPromedio();
            }
        }
        return promedio;
    };
    //Método que retorna el promedio general de todos los alumnos 
    GestorDeLegajos.prototype.promedioGeneral = function () {
        var promedio = 0;
        for (var index = 0; index < this.alumnos.length; index++) {
            var alumnoActual = this.alumnos[index];
            promedio += alumnoActual.getPromedio();
        }
        promedio = promedio / this.alumnos.length;
        return promedio;
    };
    return GestorDeLegajos;
}());
//Se instancia la clase gestor de legajos
var legajo = new GestorDeLegajos();
//Se instancia la clase alumno, pasando por parámetro los argumentos requeridos.
var maria = new Alumno('Maria', 41247896, [4, 8, 7, 10]);
var antonia = new Alumno('Antonia', 41254300, [7, 6, 9, 8]);
var enzo = new Alumno('Enzo', 4185696, [5, 9, 8, 8]);
var lionel = new Alumno('Lionel', 41388744, [2, 7, 7, 8]);
legajo.altaAlumnos(maria);
legajo.altaAlumnos(antonia);
legajo.altaAlumnos(enzo);
legajo.altaAlumnos(lionel);
//Se cálcula el promedio por alumno utilizando el dni y se imprime en la consola.
console.log("PROMEDIO POR ALUMNO");
console.log(legajo.promedioAlumno(41388744));
console.log(legajo.promedioAlumno(41254300));
console.log(legajo.promedioAlumno(4185696));
console.log(legajo.promedioAlumno(41247896));
//Se cálcula el promedio general y se imprime por consola.
console.log("PROMEDIO GENERAL");
console.log(legajo.promedioGeneral());
