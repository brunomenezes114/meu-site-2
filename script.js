const slider = document.getElementById("volumeSlider");
const audio = document.getElementById("music");

function atualizarBarra(){

    const valor = slider.value;

    audio.volume = valor / 100;

    slider.style.background = `
    linear-gradient(
        to right,
        #ffffff 0%,
        #ffffff ${valor}%,
        rgba(255,255,255,.35) ${valor}%,
        rgba(255,255,255,.35) 100%
    )`;

}

slider.addEventListener("input", atualizarBarra);

atualizarBarra();