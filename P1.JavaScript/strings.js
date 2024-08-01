/*
.lenght = Retorna o tamanho da String completa com os espacos(letras)
.toLocaleUpperCase() = Deixa a String com letra maiuscula
.indexOf() = Revela a posicao em que esta a String desejada.
.slice(0,9) = posicao inicial, quantas palavras quero que tenha. 
.substring(13,19) = Bem parecido com o slice. 
.includes("") = Verifica se a String existe, retornando true or false
.concat() = junta 2 variveis de string formando 1 so
.trim() = ele tira os espacos finais e iniciais de uma string
.split(","); = Aonde ele encontrar , ele vai transformar o elemento em um Array
.replace(" "," ") = vai mudar a string atual por uma outra que eu querer

*/

// para contar a quantidade de letras  no nome se utiliza .lenght
var nome = "Marcelo da silva";
var x = nome.length;
console.log(x) 

// ponto de interrogação sendo utilizado como Else
resultado = x > 8 ? " Obrigado " : "Por favor preencha com o sobrenome";

console.log(resultado);

// .tolocaleuppercase retorna o nome todo em maiusculo
var res = nome.toLocaleUpperCase()
console.log(res)

// .toLocaleLowerCase retorna o nome todo em minusculo
var res = nome.toLocaleLowerCase()
console.log(res)

// .indexOf para descobrir a posição onde se começa tal palavra exemplo "Real" posição :13
var jogo = "Barcelona vs Real melhor time";
var posicao = jogo.indexOf("Real");
console.log(posicao)

// .slice mostra no console apenas a quantidade de caracteres selecionados "Barcelona"
var cortado = jogo.slice(0,9)
console.log(cortado)  

// .slice mostra no console apenas a quantidade de caracteres selecionados "Real melhor time"
var cortado = jogo.slice(13,)
console.log(cortado) 

// .includes retorna verdadeiro ou falso se a palavra designada estar dentro da "string"
var val = jogo.includes("Real");
console.log(val)

// .concat junta duas variaveis de strings formando apenas uma A + B = AB
var str1 = "Hello ";
var str2 = "Turma ";

var str3 = str1.concat(str2)
console.log(str3)

// .trim serve para remover os espaços final e inicial de uma string
var frase = "           Olá vc está aprendendo JavaScript            ";
console.log(frase.trim());

// .split Transforma uma string em um arrey 
var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");
console.log(arr) // pode ser utilizado [0] para encontrar uma posição determinada dentro do arrey exemplo: console.log(arr[0])

var s = "JavaScript e Python";
var pos1 = s.indexOf("Python")
var novaString = s.substring(13,19)
console.log(novaString) 

// se a frase começar com Olá .startsWitch oque vier após o Olá deverá ser trocado .replace "mundo" por "pessoal"
var frase1 = "Olá mundo"
if (frase1.startsWith("Olá")){
    let sub = frase1.substring(4)
    let nova_string = sub.replace("mundo","pessoal")
    let nova_string_maiscula = nova_string.toUpperCase();
    console.log(nova_string_maiscula)
}

