const numeros = [1,2,3,4,5,"Raissa"];

try{
    const doublenumbers = numeros.map((num) => {
        if(typeof num !== "number"){
            throw new Error("O array só pode ter numeros")
        }
        return  num * 2;

    })

    console.log(doublenumbers);

}catch(error){
    console.log("Ocorreu uma exceção: " + error.message)
}

