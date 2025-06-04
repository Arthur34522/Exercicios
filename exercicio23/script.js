function calcular(valor){
    let resp;
    resp = valor * 365;
    return resp;
}

function imprime(resp) {
    document.getElementById('resultado').textContent = `Você viveu aproximadamente ${resp} dias.`;
}

document.getElementById('Calcularbtn').addEventListener('click', function() {
let idade, total;
idade = parseInt(document.getElementById('idadeInput').value);
total = calcular(idade);
imprime(total);
});