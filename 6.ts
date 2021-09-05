/*function imprimirId(id:number | string){
    console.log(`El ID es  ${id}`);
}

imprimirId(1);
imprimirId('abc');
*/

function imprimirId(id:number | string){
    if(typeof id === "string"){
        console.log(`El ID es ${(id as string).toUpperCase()}`);
    }else{
        console.log(`El ID es ${(id as number).toFixed(2)}`);
    }
}

imprimirId('este_es_mi_id');
imprimirId(100.234234123);

