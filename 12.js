function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
console.log(crearCuadrado({ ancho: 10 }));
