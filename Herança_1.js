class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("já está ligado")
            return;
        }
        this.ligado = true; 
    }

}

class SmarthPhone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}

var s1 = new SmarthPhone("Samsung", "Preto", "A71");
console.log(s1);

s1.ligar();

console.log(s1);

s1.ligar();


