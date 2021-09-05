/*enum MarcasDeAutos{
    Toyota,
    Chevrolet,
    Ford
}*/
enum MarcasDeAutos{
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;
console.log(tacoma);
console.log(MarcasDeAutos[0]);