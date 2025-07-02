function calculaFatorial (numero) {
    let resultado = 1;
    for (let i=0; i<numero ; numero--) {
        resultado = resultado * numero;
    }
    return resultado;
}
console.log(calculaFatorial(5))