//criando as variaveis
var bebida = "café";
var valor;

//criando switch
switch (bebida) {
    case 'café':
         valor = 13.501;
         console.log(`Você escolheu café. O valor a ser pago é R$ ${valor.toFixed(2)}`); // .tofixed(2) = indica valor formatado com duas casas decimais
        break;
    case 'leite':
        valor = 2.50;
        console.log(`Você escolheu leite. O valor a ser pago é R$ ${valor.toFixed(2)}`);
        break;
    case 'chá':
        valor = 1.00;
        console.log(`Você escolheu chá. O valor a ser pago é R$" ${valor.toFixed(2)}`);
        break;
    default:
        console.log("Opção inválida. Escolha entre café, leite ou chá.");
        break;
    }

