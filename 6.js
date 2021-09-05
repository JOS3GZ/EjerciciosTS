/*function imprimirId(id:number | string){
    console.log(`El ID es  ${id}`);
}

imprimirId(1);
imprimirId('abc');
*/
function imprimirId(id) {
    if (typeof id === "string") {
        console.log("El ID es " + id.toUpperCase());
    }
    else {
        console.log("El ID es " + id.toFixed(3));
    }
}
imprimirId('este_es_mi_id');
imprimirId(100.234234123);
