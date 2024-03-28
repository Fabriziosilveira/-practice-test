function inverter(string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}

const inicialString = "Teste";

const stringInvertida = inverter(inicialString);

console.log("String original:", inicialString);
console.log("String invertida:", stringInvertida);