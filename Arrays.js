var valores = [8,1,7,2,9];

console.log(valores[0],valores[2]) // se quiser pegar o resultado de mais itens dentro da lista utilizar ,e o nome da variavel(valores) [numero da posição]

for (var pos = 0 ; pos < valores.length; pos++){ //Valor inicial ; posição dos valores do arrey menor que o tamanho total do arrey; [valores] incrementando do arrey
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

var carros = [];
carros [0] = "volvo"; // numero designado dentro do arrey [0]
carros [1] = "jeep";

console.log(carros)

var motos = new Array("BMW","Yamaha","Honda");

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;

console.log(media);

// Localizar o maior valor dentro de um Array
var maiorValor = Math.max(...valores);
console.log(maiorValor)

console.log(" ")

//--------------------------------------------------------------------------------------------------------------------------------------------//

/* Metodos de Array
.shift() = retirar um numero
.indexOf() = posicao do valor que eu quero
.push() = adicionando um valor no array
.pop() = retirando o ultimo valor do array
.reverse() = invertendo o array
*/

var arr1 = [1,2,3,4,5,6]; // arrey 

console.log(arr1.join(' ')); // print

var retirado = arr1.shift(); // retira o primeiro

console.log(retirado) // print

console.log(arr1); // print

console.log("Posição do numero 3: " + arr1.indexOf(3))  // mostra a posição do elemento pedido    

arr1.push(7); // acrescenta um elemento na ultima posição

console.log(arr1); // print

arr1.pop(); // remove o ultimo elemento

console.log(arr1); // print

console.log("Arrey invertido " + arr1.reverse()); // .reverse inverte arrey

//Como criar um novo array que tenha somente numeros positivos

var arr2 = [-5, 10,15,20,-3,89];
var numerosPositivos = [];

// Usando um loop for para verificar e adicionar números positivos

for (var pos = 0; pos < arr2.length; pos++) {
    if (arr2[pos] > 0) {
        numerosPositivos.push(arr2[pos]);
    }
}
console.log(numerosPositivos);
console.log(' ')
//------------------------------------------------------------------------------------------------------------------------------------------------------//

/*
splice removedor de itens posição depois quantidade (1,1)
A função splice serve para remover substituir ou adicionar  
unshift serve para adiconar elemento no começo do array
*/

var arr3 = [1,2,3,4,5,6,7];

arr3.splice(1,1);

console.log(arr3);

var nomes = ["Maria","joão","Lucas","Pedro"];

var novos = nomes.splice(1,1,"Luiz");   

console.log(nomes)

var pais = ["Brasil","Argentina","Colombia"];

pais.unshift("Uruguai"); 
console.log(pais);

// Crie um Array com 5 nomes. Acrescente um nome: Monica. Retire o ultimo elemento do Array. Encotre a posicao do Samuel. Troque o Manuel por Emanuel
var nomes5 = ["Guilherme", "Samuel", "Manoel", "Jose", "Raissa"]
nomes5.splice(4,1);
nomes5.splice(2,1, "Emanoel");
nomes5.unshift("Monica");
console.log(nomes5) // [ 'Monica', 'Guilherme', 'Samuel', 'Emanoel', 'Jose' ]

var posicaoSamuel = nomes5.indexOf("Samuel");
console.log(posicaoSamuel) // 2

//--------------------------------------------------------------------------------------------------------------------------------------------------//

/*

Slice = copia uma parte de um array e retorna como um novo array. Nao modifica o array original
concat = Junta duas partes e apos essa juncao ele retorna um novo array A + B = AB

*/

var pessoa = ["Eduardo","joana","Wallace","Rosana"];
var gerente = ["Davi","Manuela"];

var pessoas1 = pessoa.slice(1,3);

console.log(pessoa) // array verdadeiro (LEBLANC)
console.log(pessoas1) // copia do array (LEBLANC FALSA)

var empresa = pessoa.concat(gerente); // ajunta 2 arrays em 1 só concat

console.log(empresa)

// Array com todos os meses do ano. Dividir ele em trimestres. 
var meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

var t1 = meses.slice(0,3)
var t2 = meses.slice(3,6)
var t3 = meses.slice(6,9)
var t4 = meses.slice(9,12)

console.log(t1,t2,t3,t4) //Separados em trimestres

console.log(" ")

//----------------------------------------------------------------------------------------------------------------------------------------------//

/* .filter  utilizado para filtrar a condição exigida do arrey


*/

var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);

console.log(resultado)

var numerosfiltadros = numeros.filter(item => item > 5);

console.log(numerosfiltadros)

var numerosfiltadros = numeros.filter(item => item < 5);

console.log(numerosfiltadros)

var funcionario = [
    {nome: "Luiz", idade: 62}, 
    {nome: "Davi", idade: 22}, 
    {nome: "Arthur", idade: 18}, 
    {nome: "Lucas", idade: 40}, 
]

var pessoasListagem2 = funcionario.filter( valor => console.log(valor.nome))

var Listaidade = funcionario.filter( valor => console.log(valor.idade))

var pessoasListagem = funcionario.filter(
    function(valor){
        return valor.nome.length < 5 // procurando pessoas q tenham abaio de 5 letra no nome
    }
)

console.log(pessoasListagem)

var pessoasListagem = funcionario.filter(
    function(valor){
        return valor.idade > 36  // contando apenas quem tem maior de 36 anos de idade
    }
)

console.log(pessoasListagem)
console.log(" ")

//Mostra o id e a descrição dos produtos com a categoria de Eletronico 
    var produtos = [
        {id: 1, descricao: "SmartPhone", categoria: "Eletronico"}, 
        {id: 2, descricao: "Notebook", categoria: "Eletronico"}, 
        {id: 3, descricao: "Geladeira", categoria: "Eletrodomestico"}, 
        {id: 4, descricao: "Raissa", categoria: "Objeto🥵"}, 
    ]
    
var filtroCategoria = produtos.filter(
    function(valor){
        return valor.categoria == "Eletronico"
    }
)

console.log(filtroCategoria)

//------------------------------------------------------------------------------------------------------------------------------------------//

// .map 
var num3 = [1,2,3,4,5,6,7,8,9,10];

var nums = num3.map(function(valor){
    return valor *2;
});

console.log(nums);

var funcionario1 = [
    {nome: "Luiz", idade: 62}, 
    {nome: "Davi", idade: 22}, 
    {nome: "Arthur", idade: 18}, 
    {nome: "Lucas", idade: 40}, 
]

nomes1 = funcionario1.map(pessoa2 => pessoa2.nome)
console.log(nomes1)

//------------------------------------------------------------------------------------------------------------------------------------------//

var num3 = [1,2,3,4,5,6,7,8,9,10];

// Reduce:
total = 0;
for (var i = 0; i < num3.length; i++){
    total += num3[i]
}
 console.log(total);

 // ou:

 var tot = num3.reduce(function(total,numero){
    return total + numero;
 },0);
console.log(tot)
console.log(" ")
//------------------------------------------------------------------------------------------------------------------------------------------//

// .foreach

var a = [10,20,30,40,50,60];
tot1 = 0;

a.forEach(valor => console.log(valor));

a.forEach(valor =>{
    tot1 += valor;
})

console.log(tot1)