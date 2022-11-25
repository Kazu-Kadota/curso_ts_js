const nome = `Luiz`; //String
const nome1 = 'Luiz'; //String
const nome2 = "Luiz"; //String
const num1 = 10; //Number
const num2 = 10.52; //Number
let nomeAluno; //undefined = nao aponta para local nenhuma na memoria
const sobrenomeAluno = null; //Nulo -> nao aponta para local nenhuma na memoria
const aprovado = true; //Boolean = true, false (logico)

console.log(typeof num1, num2, nomeAluno, sobrenomeAluno, aprovado);

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

let c = 2;
let d = c;
console.log(c, d);

c = 3;
console.log(c, d);