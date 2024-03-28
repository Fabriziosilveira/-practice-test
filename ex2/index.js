function verificaFibonacci(numero) {
    let n1 = 0;
    let n2 = 1;

    // Caso for 0
    if (numero === 0) {
        return true;
    }

    while (n2 <= numero) {
        if (n2 === numero) {
            return true;
        }
        let temp = n2;
        n2 = n1 + n2;
        n1 = temp;
    }

    return false;
}

// Número para verificar se está na sequência de Fibonacci
const numeroVerificar = 34;

if (verificaFibonacci(numeroVerificar)) {
    console.log(`O número ${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numeroVerificar} NÃO pertence à sequência de Fibonacci.`);
}
