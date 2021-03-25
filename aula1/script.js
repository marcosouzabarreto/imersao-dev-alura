let priceInDollars = parseFloat(prompt("Digite o valor em dolares"));
let priceInReais;

priceInReais = priceInDollars*5.65;
priceInReais = priceInReais.toFixed(2);
alert(`${priceInDollars} dolares sao iguais a ${priceInReais} reais`)