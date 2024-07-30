var carros =[{modelo: "Audio A3", marca : "Audi", ano: 2020},
            {modelo: "Compass", marca : "Jeep", ano: 2021}
]

for(i=0; i< carros.length; i++){
    console.log(carros[i].marca)
}

console.log(" ")

for (let caracteristica in carros){
    console.log(carros[caracteristica])
}

console.log(" ")

for (let carro of carros){
    console.log(carro)
}

console.log(" ") 
// se a condição não for verdadeira n será executada    while
var c = 1;
while (c <= 10){
    console.log(c);
    c++;
}

console.log(" ")
// independente da condição ser verdadeira ou não será executada 1 vez    do-while
var t = 1; 
do{
    console.log(t);
    t++
}while( t < 1)