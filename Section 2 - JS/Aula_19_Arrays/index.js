//            0123456789
const nome = `Luiz Otavio`

//               0       1        2
const alunos = [`Luiz`, `Maria`, `Joao`];
console.log(alunos)
console.log(alunos[0]);

alunos[0] = `Eduardo`; //Troca
console.log(alunos);

alunos[3] = `Luiza`; //Troca
console.log(alunos);

alunos[alunos.length] = `Gabriel`;
alunos[alunos.length] = `Fabio`;
alunos[alunos.length] = `Luana`; //Adiciona no fim
console.log(alunos);

alunos.push(`Otavio`); // Adiciona no fim
console.log(alunos); 

alunos.unshift('Carlos'); // Adiciona no inicio
alunos.unshift('Andre');
console.log(alunos);

const removidoFim = alunos.pop(); //Remove o ultimo valor da lista
const removidoInicio = alunos.shift();
console.log(removidoInicio);
console.log(removidoFim);
console.log(alunos);

delete alunos[1]; //Remove o valor da lista mas nao altera o indice
console.log(alunos[50]);
console.log(alunos);

console.log(alunos.slice(0,3));

console.log(typeof alunos);
console.log(alunos instanceof Array);