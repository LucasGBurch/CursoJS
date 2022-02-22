function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par.'
    } else {
        return 'Ímpar.'
    }
}

var res = parimpar(53 + 1)
console.log(res) // é preciso imprimir a execução.