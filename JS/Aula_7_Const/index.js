// Nao podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Nao pode comecar o nome de uma constante com um numero
// Nao podem conter espacos ou tracos
// Utilizamos a primeira letra minuscula e depois maiusculas
// Case-sensitive
// Nao podemos modificar o valor de uma constante
// Utilizar const, nao var

const primeiroNumero = 5;
const segundoNumero = 10;
const string = `5`;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoAumentando = resultado * 3;
resultadoAumentando = resultadoAumentando * 2
console.log(resultadoAumentando);

console.log(typeof(resultadoAumentando));

console.log(primeiroNumero + segundoNumero)
console.log(string + segundoNumero)

console.log(typeof(primeiroNumero + segundoNumero))
console.log(typeof(string + segundoNumero))
