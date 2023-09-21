//Se crea la clase Logger con el diseño de Singleton para que se asegure de crear un solo objeto.  
class Logger {

  private static me?: Logger;

  private constructor() { }

  //Método que retorna la instancia estatica, en el caso que no exista la crea y la retorna.
  public static getInstance() {
    if (this.me) {
      return this.me;
    }
    this.me = new Logger();
    return this.me;
  }

  //Método que se utiliza para dar la bienvenida al sistema
  public accederSistema() {

    console.log("Bienvenido/a, accediste al sistema");
  }
}

//Se llama al unico objeto del logger a través de la función acceder al sistema.
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();