/* 13 - function imprimir(estadoCivil: 'soltero' | 'casado'){
    console.log(estadoCivil);
}

imprimir('soltero');*/


/* 14 interface Transporte{
    nombre: String;
}

class Caballo implements Transporte{
    constructor(public nombre: String){};
} 

class Automovil implements Transporte{
    constructor(public nombre: String){}
}

type ConstructorTransporte = {
    new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorTransporte, nombre: String){
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, 'Paso Fino');
const miAutomovil =  construirTransporte(Automovil, 'Toyota');

console.log('Mi caballo se llama' + miCaballo.nombre);
console.log('Mia automovil' + miAutomovil.nombre); */


/* 15 function miIterador(arr: any[], callback: (arg: any, index?: number) => void){
    for(let i=0; i<=arr.length; i++){
        callback(arr[i],i);
    }
}

miIterador([1,2,3], (a) => console.log(a));
miIterador([1,2,3], (a, i) => console.log(a,i)); */

/* 16 function longuitud(a: any[]): number;
function longuitud(x: string): number;
function longuitud(x: any): number{
    return x.length;
}

function calcularLonguitud(x: any[] | string){
    return x.length;
}

console.log(longuitud("Hola Mundo"));
console.log(longuitud([1,2,3,4,5]));

console.log(calcularLonguitud('Hola Mundo'));
console.log(calcularLonguitud([1,2,3,4,5])) */


/* 17 const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: () => {
        this.admin = true;
    },
};

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);  */

/* 18 function multiplicar(n: number, ...m: number[]): number{
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}
console.log(multiplicar(2,2));
console.log(multiplicar(2,2,3));
console.log(multiplicar(2,2,3,4)); */

/* 19 function sumar(num){
    return num.a + num.b + num.c;
}

function sumar2({a, b, c}): number{
    return a + b + c;
}

function sumar3({a, b, c}: {a:number; b:number; c: number}): number{
    return a + b + c;
}


const numeros = {a: 1, b: 2, c: 2};
console.log(sumar(numeros));
console.log(sumar2({a: 1, b: 2, c: 2}));
console.log(sumar3({a: 1, b: 2, c: 2})); */



/* 20 interface Persona{
    nombre: string;
    edad: number;
}

function saludar3(persona: Persona){
    return `Hola ${persona.nombre}`;
}

console.log(saludar3({nombre: "Luis", edad: 22})); */

/* 21 interface Computadora{
    os: 'Windows' | 'Linux' | 'Mac';
    monitor?: 'crt' | 'led'
    memoria: number;
    precesador: 'intel' | 'amd'
}

function imprimir(computadora : Computadora){
    console.log(`Sistema operativo: ${computadora.os}`);
    console.log(`Memoria: ${computadora.memoria}`);
    console.log(`Preocesador: ${computadora.precesador}`);
}

imprimir({
    os: 'Windows',
    memoria: 8,
    precesador : 'intel',
});*/

/* 22interface Perro{
    readonly raza: String;
}

const miCachorro: Perro = {raza: "Masco"};
console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);*/

/* 23 interface Persona{
    edad: number;
}

interface EdadNoEscribible{
    readonly edad: number;
}

const Luis: Persona = { edad: 20 };
const Pedro: EdadNoEscribible = Luis
Luis.edad++;
Pedro.edad++; */

/* 24 interface Caja{
    contenido: unknown;
}

let x: Caja = {
    contenido: "Hola Mundo",
}

if(typeof x.contenido === "string"){
    console.log(x.contenido.toLocaleLowerCase());
}

console.log((x.contenido as string).toLocaleLowerCase()); */

/* 25 interface CajaNumber{
    contenido: number;
}

interface CajaString{
    contenido: string;
}

interface CajaBoolean{
    contenido: boolean;
}

function setContenido(caja: CajaNumber, nuevoContenido: string): void;
function setContenido(caja: CajaString, nuevoContenido: number): void;
function setContenido(caja: CajaBoolean, nuevoContenido: boolean): void;
function setContenido(caja: {contenido: any}, nuevoContenido: any){
    caja.contenido =nuevoContenido;
}*/

type Auto = [string, number];
const prius: Auto = ['Toyota', 2015];
const civic: Auto = ['Honda', 2016];

console.log('El Prius es marca: ', prius[0], 'y modelos: ', prius[1]);
console.log('El Civix es marca: ', civic[0], 'y modelos: ', civic[1]);