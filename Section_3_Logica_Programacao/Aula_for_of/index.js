const nome = 'Luiz Otavio';
const nome1 = [
    'Luiz',
    'Otávio'
];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

for (let i in nome) {
    console.log(i, nome[i]);
}

console.log("########")

for (let valor of nome) {
    console.log(valor);
}

console.log("########")

for (let i in nome1) {
    console.log(nome1[i]);
}

console.log("########")

for (let valor of nome1) {
    console.log(valor);
}

nome1.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})