const Carinho_de_compras = [];

function adicionadorDeItemNoCarinho(item){
    Carinho_de_compras.push(item)
}

function removedorDeItemNoCarinho(item){
    const index = Carinho_de_compras.indexOf(item);
    if(index !== -1){
        Carinho_de_compras.splice(index,1)
    }
}

function visualizadorDeCarinho(){
    if(Carinho_de_compras.length == 0){
        console.log("Seu carrinho está completamente vazio")
    }else{
        console.log("Seu carinho possui itens:")
        for(let i = 0; i < Carinho_de_compras.length;i++){
            console.log(`${i + 1} - ${Carinho_de_compras[i]}`)
        }
    }
}

function limpadorDeCarinho(){
    Carinho_de_compras.length = 0;
    console.log("Seu carinho foi limpo")
}

adicionadorDeItemNoCarinho("Coca-cola")
adicionadorDeItemNoCarinho("Fogão")
adicionadorDeItemNoCarinho("Espatula")

visualizadorDeCarinho()

removedorDeItemNoCarinho("Coca-cola")

visualizadorDeCarinho()

limpadorDeCarinho()

visualizadorDeCarinho()
