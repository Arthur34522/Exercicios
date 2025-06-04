let contadorElemento = document.getElementById("contador");
let botaoIncrementar = document.getElementById("incrementar");
let botaoDecrementar = document.getElementById("decrementar");
let contador = 0;
function atualizarContador() {
    contadorElemento.textContent = contador;
}
botaoIncrementar.addEventListener("click", function() {
    contador++;
    atualizarContador();
});
botaoDecrementar.addEventListener("click", function() {
    contador--;
    atualizarContador();
});

atualizarContador();

document.addEventListener("DOMContentLoaded", function() {
    atualizarContador();
});
