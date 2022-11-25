function saudacao (nome) {
    console.log(`Bom dia ${nome}`);
    return `Bom dia ${nome}`;
}

const variavel = saudacao(`Luiz`);
console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

//console.log(resultado); //Nao pode utilizar variaveis dentro da function

const resultado1 = soma(2, 2);
console.log(resultado1);

const resultado2 = soma();
console.log(resultado2);

const resultado3 = soma(`Luiz`, `Otavio`);
console.log(resultado3);

const resultado4 = soma(4, 2);
console.log(resultado4);

// const raiz = function (n) {
// const raiz2 = function => {
//     return n ** 0.5;
// };

const raiz = n => n ** 0.5;

console.log(raiz(9));

