type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenadas(punto: Punto){
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada x es : ${punto.y}`); 
}

imprimirCoordenadas({ x: 10, y:25});