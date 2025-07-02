function processaPedido (nome, tipoCliente, callback) {
    console.log(`Processando seu pedido, ${nome}`);
    callback(nome, tipoCliente);
}

function mensagemPedido (nome, tipoCliente) {
    if (tipoCliente === 'vip') {
        console.log(`Olá ${nome}! Você terá frete grátis.`)
    } else if ( tipoCliente === 'novo' ) {
        console.log(`Bem vindo, ${nome}! Você ganhará um cumpom`)
    } else {
        console.log(`Obrigado pela compra, ${nome}`)
    }

}

processaPedido ('Lucas', 'vip', mensagemPedido)