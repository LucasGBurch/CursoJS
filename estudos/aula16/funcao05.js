function fatorial(n) { // RECURSIVIDADE: chamar função dentro dela mesma
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1) // vai chamando isto até chegar em 1
    }
}

console.log(fatorial(6))

// 4! = 4 x 3!
// n! = n x (n - 1)!