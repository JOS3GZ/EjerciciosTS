interface Cuadrado{
    color?: string;
    ancho: number,
}

function crearCuadrado(cuadrado: Cuadrado): {area: number}{
    const area = cuadrado.ancho * cuadrado.ancho;
    return {area : area};
}

console.log(crearCuadrado({ancho: 10}));