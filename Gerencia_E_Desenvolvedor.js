// Criando as classes Funcionario, Gerente e Desenvolvedor com seus respectivos atributos
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo); 
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo); 
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}


const gerencia = new Gerente("Raissa", 21, "Gerente", "Engenharia");
const desenvolvedor = new Desenvolvedor("Adrian", 19, "Estudante do Descomplica", "Python");

// Chamando as classes
desenvolvedor.seApresentar(); 
desenvolvedor.trabalhar();    
desenvolvedor.programar();  

gerencia.seApresentar(); 
gerencia.trabalhar();  
gerencia.gerenciar();   