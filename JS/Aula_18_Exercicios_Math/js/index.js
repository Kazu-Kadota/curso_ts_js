const num = Number(prompt(`Digite um numero:`));

const numeroTitulo = document.getElementById(`numero-titulo`);
const texto = document.getElementById(`texto`);

raizQuadrada = Math.sqrt(num);
verificaInteiro = Number.isInteger(num);
verificaNaN = Number.isNaN(num);
arredondaBaixo = Math.ceil(num);
arredondaCima = Math.floor(num);
duasCasas = num.toFixed(2);

numeroTitulo.innerHTML = num;
texto.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}</p>`;
texto.innerHTML += `<p>${num} e inteiro: <strong>${verificaInteiro}</strong></p>`;
texto.innerHTML += `<p>E NaN: <strong>${verificaNaN}</strong></p>`;
texto.innerHTML += `<p>Arredondado para baixo: <strong>${arredondaBaixo}</strong></p>`;
texto.innerHTML += `<p>Arredondado para cima: <strong>${arredondaCima}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong></strong></p>`;

// document.body.innerHTML += `Seu numero e <strong>${num}</strong><br />`;
// document.body.innerHTML += `Raiz quadrada: <strong>${raizQuadrada}</strong><br />`;
// document.body.innerHTML += `${num} e inteiro: <strong>${verificaInteiro}</strong><br />`;
// document.body.innerHTML += `E NaN: <strong>${verificaNaN}</strong><br />`;
// document.body.innerHTML += `Arredondado para baixo: <strong>${arredondaBaixo}</strong><br />`;
// document.body.innerHTML += `Arredondado para cima: <strong>${arredondaCima}</strong><br />`;
// document.body.innerHTML += `Com duas casas decimais: <strong></strong><br />`;

