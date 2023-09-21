//Se define la clase cuenta con sus atributos, contructor y métodos.
export class Cuenta {
    private titular: string;
    private saldo: number;

    public constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }


    public getTitular(): string {
        return this.titular;
    }

    public getSaldo(): number {
        return this.saldo;
    }


    public mostrar() {
        console.log(`El nombre del titular de la cuenta es: ${this.getTitular()}, saldo disponible $${this.getSaldo()}`)

    }

    //Método que calcula el monto que ha ingresado el titular de la cuenta.
    public ingresarMonto(monto: number) {
        if (monto > 0) {
            this.saldo += monto
            console.log(`El monto que usted ha ingresado es de: $${monto} `)

        } else {
            console.log("El monto que desea ingresar debe ser mayor a 0")
        }


    }

    //Método que calcula el monto que ha retirado el titular de la cuenta.
    public retirarMonto(monto: number) {
        if (monto > 0) {
            this.saldo -= monto
            console.log(`El monto que usted ha retirado es de: $${monto}`)
        }

    }
}