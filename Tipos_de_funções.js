function multiplicar(x,y){
    return x * y
}

var a = multiplicar(4,2);
console.log(a)

var b = multiplicar(7,7);
console.log(b)


// pode deixar sem numeros dentro da função 
function somaValores(a,b,c){
    var total = a + b + c
    return total
}

var c = somaValores(8,2,4);
console.log(c)


// tem como colocar numeros dentro da função
function somaValores2(a,b = 7,c = 5){
    var total = a + b + c
    return total
}

var d = somaValores2(8);
console.log(d)


var funcao_anonima = function(a,b,c){
    return a + b + c;
}

console.log(funcao_anonima(2,5,8))

const soma = (num1,num2) =>{
    return num1 + num2
}

console.log(soma(3,6))

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num)
console.log(valores)


var listaProdutos = ["geladeira", "fogão", "air fryer"]
var listaEmMaiscula = listaProdutos.map(primeiraEmMaiscula);

// charAt utilizado para denominar a onde a função deve ser inciada (posição)
function primeiraEmMaiscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

console.log(listaEmMaiscula)

