var pais = "Brasil";


if(pais != "Brasil"){
    console.log("Você não é brasileirau")
}else{
    console.log("Você é brasileiru :)")
}

var idade = 19;

if(idade < 18){
    console.log("Você é de menor")
}else if(idade >=18 && idade <= 24){
    console.log("Você faz faculdade")
}else{
    console.log("Você é clt")
}

console.log(" ") // pulando linha

//--------------------------------------------------------------------------------------------------------------------------------------//

var diasem = 5;

switch(diasem){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terça")     
        break;
    case 4:
        console.log("Quarta") 
        break;
    default:
        console.log("Esse dia da semana não existe")
}