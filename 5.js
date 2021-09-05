/*function saludar2(): void{
    console.log("Hola Mundo Cruel");
}

saludar2();

function saludar3(nombre: string){
    console.log(`Hola ${nombre}`);
}

saludar3("Nubia");*/
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirConsola(s) {
    console.log(s);
}
saludar4(imprimirConsola);
