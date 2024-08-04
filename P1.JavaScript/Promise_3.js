class MinhaClase{

    constructor(valor){
        this.valor = valor;
}

    operacaoAssincrona(){
        return new Promise((resolve,reject) => {

            const resultado = this.valor * 2;

            if(resultado >=10){
                resolve(resultado)
            }else{
                reject("O resultado é negativo")
            }
        })
    }
}

const minhaClase = new MinhaClase(2);
minhaClase.operacaoAssincrona()
.then((resultado) => {
    console.log("O resultado da operação é :", resultado)
})
.catch((erro) => {
    console.log("Ocorreu um problema", erro)
})