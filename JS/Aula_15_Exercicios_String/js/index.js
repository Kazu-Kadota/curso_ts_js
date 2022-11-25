const nome = prompt(`Digite seu nome completo:`);
console.log(nome);

aux = nome.replace(' ','');
quantidadeLetras = aux.length;
segundaLetraNome = nome.charAt(1);
primeiroIndiceA = nome.indexOf(`a`);
ultimoIndiceA = nome.lastIndexOf(`a`);
ultimas3Letras = nome.slice(-3);
[primeiraPalavra, segundaPalavra] = nome.split(" ");
maiusculas = nome.toUpperCase();
minusculas = nome.toLowerCase();
espaco = nome.match(/ /);

console.log(aux, quantidadeLetras, segundaLetraNome, primeiroIndiceA, ultimoIndiceA, ultimas3Letras, primeiraPalavra, segundaPalavra, maiusculas, minusculas, espaco);

document.body.innerHTML += `O seu nome e: <strong>${nome}</strong> <br />`;
document.body.innerHTML += `Seu nome tem <strong>${quantidadeLetras}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome: <strong>${segundaLetraNome}</strong> <br />`;
document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome? <strong>${primeiroIndiceA}</strong> <br />`;
document.body.innerHTML += `Qual o ultimo indice da letra a no seu nome? <strong>${ultimoIndiceA}</strong> <br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome sao: <strong>${ultimas3Letras}</strong> <br />`;
document.body.innerHTML += `As palavras do seu nome sao: <strong>${primeiraPalavra}</strong> e <strong>${segundaPalavra}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiusculas: <strong>${maiusculas}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras minusculas: <strong>${minusculas}</strong> <br />`;


/**
 * Console do navegador:
 * window.document.body.innerHTML = `Qualquer outra coisa`; Substitui o conteudo do innerHTML
 * window.document.body.innerHTML += `Qualquer outra coisa <br />`; Adiciona o conteudo do innerHTML
 */