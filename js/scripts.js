// programando com strict
"use strict";

// opa = "teste"; irá dar erro

const opa = "teste";

// const undefined = 10;

// delete [].length;

// console log
let a = 1;
let b = 2;

if (a === 1) {
  a = b + 2;
}
console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}
console.log(a);

// debugger
let c = 1;
let d = 2;

if (c === 1) {
  c = d + 2;
}

// debugger;  COMENTADO PRA NÃO TRAVAR O CÓDIGO

for (let i = 0; i < d; i++) {
  c = c + 2;
}

console.log("Executou o LOOP !");

// debugger;  COMENTADO PRA NÃO TRAVAR O CÓDIGO

if (c > 5) {
  c = 25;
}

// tratamento de dados
function checkNumber(n) {
  const verdadeiro = Number(n);
  console.log(`Resultado função Number ${verdadeiro}`);
  if (Number.isNaN(verdadeiro)) {
    console.log(`Não é um número !!! ==> ${verdadeiro}`);
    return;
  }
  console.log(`Número recebido !!! ==> ${verdadeiro}`);
  return verdadeiro;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("Teste");

// exceções
let e = 100

if (e != 1) {
    // throw new Error(`O valor de e deve ser igual a 1 e está como ${e}`);
    // COMENTADO PRA NÃO PARA O PROGRAMA
}

// try catch
try {
    const soma = x + y;
} catch (erro) {
    console.log(`Erro no programa ${erro}`);
}

// finally
const testandoFinally = function (n) {
    try {
        const valor = checkNumber(n);
        if (!valor) {
            throw new Error (`Não é um valor numérico !! ${n}`);
        }
} catch (error) {
    console.log(`Erro no programa ${error}`);
} finally {
    console.log(`O código foi executado !! O valor é ${n}`);
}
}

testandoFinally(50000);
testandoFinally('x');

// assertion
function arrayVazio (arr) {
    if (arr.length === 0) {
        throw new Error ("O array esta vazio !!!");
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }
}

// arrayVazio([]);
arrayVazio([1,2,3,4,5]);