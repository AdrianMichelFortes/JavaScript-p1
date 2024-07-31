class ContaCliente{
    constructor(numeroConta,saldo,debito,credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }
    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito
    }

    vericarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
        if(saldoAtual >= 0){
            alert("Saldo positivo R$" + saldoAtual)
        }else{
            alert("Saldo negativo R$" + saldoAtual)
        }
    }
}

let numeroConta = prompt("Digite o número da conta do cliente")
let saldo = parseFloat(prompt("Digite o Saldo do cliente"))
let debito = parseFloat(prompt("Digite o debito do cliente"))
let credito = parseFloat(prompt("Digite o Crédito do cliente"))

let conta = new ContaCliente(numeroConta,saldo,debito,credito)
conta.vericarSaldo();
