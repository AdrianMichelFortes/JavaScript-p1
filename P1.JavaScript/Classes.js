class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("Olá " + this.nome);
    }
    andar(){
        console.log(this.nome + " Está caminhando")
    }

    get nomecompleto(){
        console.log("Olá " + this.nome + " " + this.sobrenome);
    }
}

p1 = new Pessoa("Raissa", "Carlucio");
p1.falar();
p1.andar();
p1.nomecompleto