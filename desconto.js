function calculaDesconto (preco, desconto) {
    let desconto;
    return desconto = preco - (preco * desconto / 100)
}

console.log(calculaDesconto(40, 10))