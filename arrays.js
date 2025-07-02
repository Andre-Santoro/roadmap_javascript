function calculaEntreNumeros (inicio, fim) {
    let arr = []
    for (i = 0; i < fim; i++, inicio ++) {
        arr[i] = inicio
    }

    return arr
}

console.log(calculaEntreNumeros(1, 10))