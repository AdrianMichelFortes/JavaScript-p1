// forma de criar objeto

const pessoa = {
    nome: "Lucas",
    sobrenome: "Silva"
}


console.log(pessoa["nome"])
console.log(pessoa["sobrenome"])

// 2 forma de criar objeto

console.log("\n")

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Joana"

console.log(funcionario.nome)
console.log(funcionario.sobrenome)

// 3 forma de criar objetos

function criarPessoa(nome, sobrenome, i){
    return {nome, 
        sobrenome,
        idade : i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

console.log("\n")

const p1 = criarPessoa("Arthur", "Silva", 23)
const p2 = criarPessoa("João", "Silva", 19)

console.log(p1.nomeCompleto) // nome completo
console.log(p2) // nome completo + informações 
console.log(p2.nome) // apenas a informação pedida
console.log(p2.idade)

