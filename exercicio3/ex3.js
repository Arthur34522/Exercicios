function calcularDuracao() {
  const dias = parseInt(document.getElementById('dias').value);
  const horas = parseInt(document.getElementById('horas').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(dias) || isNaN(horas)) {
    resultado.innerHTML = "Por favor, insira valores válidos.";
    return;
  }

  const duracaoTotal = (dias * 24) + horas;
  resultado.innerHTML = `Duração total da viagem: <strong>${duracaoTotal} hora(s)</strong>.`;
}
