function getDiaSemana (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = `Domingo`;
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = `Segunda`;
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = `Terca`;
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = `Quarta`;
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = `Quinta`;
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = `Sexta`;
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = `Sabado`;
        return diaSemanaTexto;
    Default:
        diaSemanaTexto = ``;
        return diaSemanaTexto;
    }
}

const data = new Date();
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemana(diaSemana);

// let diaSemanaTexto;

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = `Domingo`;
//         break;
//     case 1:
//         diaSemanaTexto = `Segunda`;
//         break;
//     case 2:
//         diaSemanaTexto = `Terca`;
//         break;
//     case 3:
//         diaSemanaTexto = `Quarta`;
//         break;
//     case 4:
//         diaSemanaTexto = `Quinta`;
//         break;
//     case 5:
//         diaSemanaTexto = `Sexta`;
//         break;
//     case 6:
//         diaSemanaTexto = `Sabado`;
//         break;
//     Default:
//         diaSemanaTexto = ``;
//         break;
// }

console.log(diaSemana, diaSemanaTexto);