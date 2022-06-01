/*

Avaliação de falso no JS:
false
0
'' "" ``
null / undefined
NaN
*/

function falaOi () {
    return `OI`;
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || `Kazu` || true);

const corUsuario = null;
const corPadrao = corUsuario ||`red`;

console.log(corPadrao);

const a = 0;
const b = null;
const c = `false`; //Aqui
const d = false;
const e = NaN;

console.log(a || b || c || d || e);