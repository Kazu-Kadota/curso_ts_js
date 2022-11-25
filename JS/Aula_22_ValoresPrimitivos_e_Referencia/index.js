/*
Primitivos (imutaveis) - string, number, boolean, undefined, numm, (bigint, symbol) - valores copiados
Referencia (mutavel) - array, object, function - Passados por referencia
*/

let nome = `Luiz`;
nome[0] = `R`;
console.log(nome[0], nome);

let a =`A`;
let b = a; 
console.log(a, b);

a = `Outra coisa`;
console.log(a, b);

a = [1, 2, 3];
b = [...a]; //Copia os valores

let c = b //Referecia para os mesmos valores de b
console.log (a,b);

a.push(4);
console.log (a,b);

b.pop();
console.log (a,b);

console.log(c);

const d = {
    nome: `Luiz`,
    sobrenome: `Otavio`
};
let e = d;

d.nome = `Joao`;
console.log(e);

e = {...d};
e.nome = `Luiz`;
console.log(e);
