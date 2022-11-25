// Date(0) 01/01/1970 Timestamp unix
const data = new Date();
const tresHoras = 60 * 60 * 3 * 1000;

console.log(`Dia`, data.getDate());
console.log(`Mes`, data.getMonth());
console.log(`Ano`, data.getFullYear());
console.log(`Hora`, data.getHours());
console.log(`Min`, data.getMinutes());
console.log(`Seg`, data.getSeconds());
console.log(`ms`, data.getMilliseconds());
console.log(`Dia Semana`, data.getDay());
console.log(data.toString());
console.log(Date.now());