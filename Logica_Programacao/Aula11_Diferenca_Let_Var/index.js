const verdadeira = true;

// primeira parte
//Let tem escopo de bloco { ... bloco }
//Var so tem escopo de funcao

// let nome = `Luiz`;
// var nome2 = `Luiz`;

// if (verdadeira) {
//     let nome = `Otavio`;
//     console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = `Outra coisa`;
//         console.log(nome, nome2);
//     }

//     console.log(nome, nome2);
// }


//segunda oarte
// function falaOi () {
//     var sobrenome = `Miranda`;

//     if (verdadeira) {
//         let nome = `Luiz`;
//         console.log(sobrenome);
//     }

//     // console.log(nome);
//     console.log(sobrenome);
// }

// // console.log(sobrenome);

// falaOi();

console.log(sobrenome); //Roist: Verifica o codigo se tem a variavel, se sim, devolve undefined

var sobrenome = `Miranda`;

console.log(nome);

let nome = `Luiz`;