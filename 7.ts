/*let algunValor: unknown = "esto es un string";
let longitudDelString: number = (algunValor as string).length;*/

let algunValor2: unknown = "esto es un string";
let longitudDelString2: number = (<string>algunValor2).length;

console.log(longitudDelString2);
