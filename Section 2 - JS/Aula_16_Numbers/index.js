//IEEE 754-2008

let num1 = 1500;
let num2 = 2.5;
let num3 = 10.15657213;

console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toString(2)); //Visualizacao binaria
console.log(num3.toFixed(2)); //Arredondar
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num3));

let temp = num1 * `Ola`;
console.log(temp); //Not A Number
console.log(Number.isNaN(temp));

let num4 = 0.7;
let num5 = 0.1;

console.log(num4 + num5);

num4 += num5
console.log(num4 + num5);
num4 += num5
console.log(num4 + num5);
num4 += num5
console.log(num4 + num5);

num4 = num4.toFixed(2);
console.log(Number.isInteger(num4));

num4 = parseFloat(num4);
console.log(Number.isInteger(num4));