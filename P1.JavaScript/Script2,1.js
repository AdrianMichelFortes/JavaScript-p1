const readline = require('readline-sync');
const nome = readline.question('Digite seu nome: ');
const sobrenome = readline.question('Digite seu sobrenome: ');
const nomeCompleto = `${nome} ${sobrenome}`; //ajunta o nome e sobrenome em um só dps de respondidas

console.log('Nome: ', nomeCompleto) //node Script2,1.js para responde as perguntas