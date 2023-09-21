//Se crea una clase padre llamada Cuenta con sus atributos, contructor y métodos.
export class Cuenta {
    protected id: number;
    protected saldo: number;
    protected titular: string;

    constructor(id: number, saldo: number, titular: string) {
        this.id = id;
        this.saldo = id;
        this.titular = titular;
    }

    //Método que muestra el dinero que deposito el usuario y cual es su saldo actualizado.
    public depositar(deposito: number): void {
        this.saldo += deposito;
        console.log("Usted ha depositado: $", deposito, ".Su nuevo saldo es de: $", this.saldo);
    }

    //Método que muestra el dinero que retiro el usuario y cual es su saldo actualizado.
    public retirar(retiro: number): void {
        this.saldo -= retiro;
        console.log("Ustes ha retirado: $", retiro, ".Su nuevo saldo es de: $", this.saldo);
    }
}