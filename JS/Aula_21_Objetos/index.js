const array = [1,2,3];
array.push(4);
array[0] = `Luiz`;
console.log(array);

const nome1 = `Luiz`;
const sobrenome1 = `Miranda`;
const idade1 = 25

const nome2 = `Maria`;
const sobrenome2 = `Oliveira`;
const idade2 = 55

const pessoal = {
    nome: `Luiz`,
    sobrenome: `Miranda`,
    idade: 25
};

console.log(pessoal.nome)
console.log(pessoal);

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoal2 = criaPessoa (`Luiz`, `Otavio`, 25);
const pessoal3 = criaPessoa (`Maria`, `Oliveira`, 32);
const pessoal4 = criaPessoa (`Joao`, `Miranda`, 42);
const pessoal5 = criaPessoa (`Junior`, `Lara`, 50);
const pessoal6 = criaPessoa (`Jean`, `Otavio`, 18);

console.log(pessoal2.nome, pessoal3)

const pessoa = {
    nome: `Luiz`,
    sobrenome: `Miranda`,
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi`);
    },

    falaIdade() {
        console.log(`A minha idade atual e ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    },
}

pessoa.fala();
pessoa.falaIdade();
pessoa.incrementaIdade();
pessoa.falaIdade();
pessoa.incrementaIdade();
pessoa.falaIdade();
pessoa.incrementaIdade();