function calcularPotencia(numero,potencia) {
    let resultado=1;
    for (let i = 0; i < potencia; i++) {
        resultado = resultado * numero;
    }
    return resultado
}

console.log(calcularPotencia(5,5))