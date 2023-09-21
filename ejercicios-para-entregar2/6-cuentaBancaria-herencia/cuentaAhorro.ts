import { Cuenta } from "./cuenta";

//Se crea una subclase Cuenta Ahorro con sus atributos la cual tambien hereda los atributos de la clase padre Cuenta.
export class CuentaAhorro extends Cuenta {
    private interes: number;

    constructor(id: number, saldo: number, titular: string, interes: number) {
        super(id, saldo, titular);
        this.interes = interes;
    }

    //Metodo que calcula de cuanto seria el saldo con un determinado interés.
    public calcularInteres(saldoAux: number) {
        saldoAux = saldoAux * 1.97;
        console.log("Depositando: $", saldoAux, ",Su saldo con interes seria de: $", saldoAux);
    }
}