var primeiroValor = parseInt(prompt('Digite o primeiro valor: '));
var segundoValor = parseInt(prompt('Digite o segundo valor: '));



var operacao = prompt("Digite 1 para soma, 2 subtracao, 3 multiplicacao e 4 divisao");

if(operacao==1){
    var resultado = primeiroValor + segundoValor;
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = "  + resultado + "</h2>");
} else if (operacao==2) {
    var resultado = primeiroValor - segundoValor;
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = "  + resultado + "</h2>");
} else if (operacao==3){
    var resultado = primeiroValor * segundoValor;
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = "  + resultado + "</h2>");
} else if (operacao==4) {
    var resultado = primeiroValor / segundoValor;
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = "  + resultado + "</h2>");
} else {
    document.write("Opcao Invalida");
}