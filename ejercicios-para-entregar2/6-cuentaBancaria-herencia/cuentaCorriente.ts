import { Cuenta } from "./cuenta";

//Se crea una subclase Cuenta corriente con sus atributos la cual tambien hereda los atributos de la clase padre Cuenta.
export class CuentaCorriente extends Cuenta {
    private sobregiro: number;

    constructor(id: number, saldo: number, titular: string, sobregiro: number) {
        super(id, saldo, titular);
        this.sobregiro = sobregiro;
    }

    //Método que aplica determinado interés al saldo.
    public aplicarInteres(): void {
        this.saldo = this.saldo * 1.97;
        console.log("Su saldo con interes es de: $", this.saldo);
    }
}