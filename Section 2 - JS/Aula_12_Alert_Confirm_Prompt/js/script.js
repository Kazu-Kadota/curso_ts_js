let num1 = prompt(`Digite um numero`);
let num2 = prompt(`Digite outro numero`);

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert(`O resultado foi  ${resultado}`);

//Quando a chamada esta dentro de um objeto, chamamos de metodo. Se tiver fora, chamamos de funcao

/**
 * ctrl + l limpa o console
 * No console do navegador. foi feito:
 * 
 * let confirma = confirm(`Qualquer mensagem`);
 * let num1 = prompt(`Digite um numero`);
 * num1
 * let num2 = prompt(`Digite outro numero`);
 * num2
 * num1 + num2
 * 
 * typeof num1 - string
 * typeof num2 - string
 * 
 * num1 = Number(num1);
 * num2 = parseFloat(num2);
 */