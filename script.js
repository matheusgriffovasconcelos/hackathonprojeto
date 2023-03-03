const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const proximaturma = document.getElementById('proximaturma');

// Define a data de destino
const dataDestino = new Date("2023-09-15T10:00:00").getTime();

const relogio = setInterval(function time() {
    // Obtém a data e hora atual
    const atual = new Date().getTime();

    // Calcula a diferença entre a data atual e a data de destino
    const distancia = dataDestino - atual;

    // Calcula dias, horas, minutos e segundos restantes
    const days = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibe o resultado nos elementos correspondentes
    dias.textContent = days;
    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = seconds;

    // Quando a contagem regressiva terminar, para o relógio
    if (distancia < 0) {
        clearInterval(relogio);
    }
}, 1000);
