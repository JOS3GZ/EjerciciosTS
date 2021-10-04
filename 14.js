/*class Punto{
    
    x: number;
    y: number;

    constructor(x = 10, y = 10){
        this.x = x;
        this.y = y;
    }
}

let miPunto = new Punto();
console.log(miPunto.x);
console.log(miPunto.y);*/
/*class Punto{
    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: number | string, y?: number){

    }
}*/
/*class Video{
    titulo: string;

    constructor(titulo: string){
        this.titulo = titulo;
    }

    reproducir(): void{
        console.log(`${this.titulo} se esta reproduciendo`);
    }
}

const miVideo = new Video("año nuevo");
miVideo.reproducir();*/
/*class Desfile{
    private _participantes = 0;
    
    get participantes(): number{
        return this._participantes;
    }

    set participantes(v: number){
        this._participantes = v;
    }
}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes);*/
/*class Animal{
    moverse(){
        console.log("El animal se mueve");
    }
}

class Perro extends Animal{
    ladrar(){
        console.log("El perro ladra");
    }
}

const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();*/
/*class MiClase{
    static x = 10;

    static imprimirX(){
        console.log("El valor de X es: " + this.x);
    }

    imprimirX(){
        console.log("El valor de X es: " + MiClase.x);
    }
}

MiClase.imprimirX();
console.log("El valor de C es: " + MiClase.x);

const miClase = new MiClase();
miClase.imprimirX();*/
/*class Base{
    static saludar(){
        console.log("Hola Mudo");
    }
}

class Derivada extends Base{}

Derivada.saludar();*/
var Caja = /** @class */ (function () {
    function Caja(value) {
        this.contenido = value;
        console.log(this.contenido);
    }
    return Caja;
}());
var misJuguestes = [];
misJuguestes.push({ nombre: "Pelota" });
misJuguestes.push({ nombre: "Consola" });
var miCajadeJuguestes = new Caja(misJuguestes);
var miMaquillaje = [];
miMaquillaje.push({ nombre: "Sombreas" });
miMaquillaje.push({ nombre: "Labial" });
var miCajadeMaquillaje = new Caja(miMaquillaje);
