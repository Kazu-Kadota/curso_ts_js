function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
            reject('bad value');
        }, tempo);    
    });
}

esperaAi('Conexao com BD', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return 
    })
    .then(resposta => {
        console.log('Exibe dados na tela');
    })
    .catch(e => {
        console.log('Erro', e);
    });

// esperaAi('Frase 1', rand(1, 3), funcion() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });

