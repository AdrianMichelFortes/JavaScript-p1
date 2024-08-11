const pessoa = {
    nome: 'Joao',
    idade: 25,
    profissao: "Desenvolvedor"
}

// transforma objeto para json .stringify
const pessoajson = JSON.stringify(pessoa)
console.log(pessoa)
console.log(pessoajson)

console.log(" ")


// transforma json para objeto .parse
const pessoaObj = JSON.parse(pessoajson)
console.log(pessoaObj)