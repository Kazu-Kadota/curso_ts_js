/*
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC e de 25.925925925925924.
Luiz Otavio nasceu em x.
*/

const nome = `Luiz Otavio`;
const sobrenome = `Miranda`;
const idade = 30;
const peso = 84;
const altura = 1.80;
const anoAtual = new Date()
let imc = peso/(Math.pow(altura,2));
let anoNascimento = anoAtual.getFullYear() - idade;

console.log(nome + ` ` + sobrenome + ` tem ` + idade + ` anos, pesa ` + peso + ` kg e tem ` + altura + ` de altura e seu IMC e de ` + imc + `.` + nome + ` nasceu em ` + anoNascimento + ` .`);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e tem ${altura} de altura e seu IMC e de ${imc}. ${nome} nasceu em ${anoNascimento} .`);
