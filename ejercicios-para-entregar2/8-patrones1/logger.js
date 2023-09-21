var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (this.me) {
            return this.me;
        }
        this.me = new Logger();
        return this.me;
    };
    Logger.prototype.accederSistema = function () {
        console.log("Hola");
    };
    return Logger;
}());
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
