/** Documentacoes
 * W3 Schools
 * MDN
 * ECMAScript
*/

let umaString = `Um \"texto\"`;

console.log(umaString);

//               01234567
let segString = `Um texto`;

console.log(segString[3]);
console.log(segString[-1]);
console.log(segString[8]);
console.log(segString.charAt(6));
console.log(segString.charAt(8));
console.log(segString.concat(` em`, ` um`, ` lindo dia.`));
console.log(segString + ` em um lindo dia.`);
console.log(`${segString} em um lindo dia.`);

console.log(segString.indexOf(`texto`));
console.log(segString.indexOf(`o`, 3));

console.log(segString.lastIndexOf('o'));
console.log(segString.lastIndexOf('o', 3));

console.log(segString.match(/[a-z]/g));
console.log(segString.match(/[a-z]/));
console.log(segString.match(/x/));
console.log(segString.replace(`Um`, `Outro`));

let terString = `O rato roeu a roupa do rei de roma.`;

console.log(terString.replace(/r/, `#`));
console.log(terString.replace(/r/g, `#`));

console.log(terString.length);
console.log(terString.length - 3);

console.log(terString.slice(2, 6));
console.log(terString.slice(-3));
console.log(terString.slice(-5, terString.length - 1));

console.log(terString.substring(terString.length - 5));
console.log(terString.substring(terString.length - 5, terString.lenght - 1));

console.log(terString.split(` `));
console.log(terString.split(` `, 3));

console.log(terString.toUpperCase());
console.log(terString.toLowerCase());