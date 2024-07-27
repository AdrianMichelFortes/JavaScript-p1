//1 - Abrir um terminal de cmd e escrever:
// npm install readline-sync --save
// 2 - Escrever os comandos: 

let rlSync = require('readline-sync')
let nome = rlSync.question("Qual o seu nome?\n")
console.log(`Ola, ${nome}`)

let idade = rlSync.question("Qual a sua idade?\n")
console.log(`Sua idade, ${idade}`)
//Escrever: node Script2.js e responder as perguntas