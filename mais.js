function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //classList para acessar a lista com as teclas, por exemplo: pom, clap, tim
    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function () { //função anonima, criada pra chamar outra função já que o navegador não permite chamar funções que tenham audio sem a interação do user
        tocaSom(idAudio);
    }

}

