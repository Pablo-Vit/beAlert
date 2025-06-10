const btnMsg = document.getElementById("createMsg");
const iconos = document.getElementById("iconos");
let msg = false;


function createAd() {
    if (msg) {
        let title = document.getElementById("title").value;
        let autor = document.getElementById("autor").value;
        let prioridad = parseInt(document.getElementById("prioridad").value);
        const alta = document.getElementById("importantes")
        const medio = document.getElementById("medio")
        const baja = document.getElementById("bajo")
        if (prioridad >= 7) {
            alta.innerHTML += `<div class="tablon-linea" id="linea">
            <div class="tablon-titulo">${title}</div>
            <div class="tablon-autor">${autor}</div>
            <div class="tablon-prioridad">${prioridad >= 10 ? 10: prioridad}</div>
        </div>`
        } else if (prioridad >= 4 && prioridad <= 6) {
            medio.innerHTML += `<div class="tablon-linea2" id="linea">
            <div class="tablon-titulo">${title}</div>
            <div class="tablon-autor">${autor}</div>
            <div class="tablon-prioridad">${prioridad}</div>
        </div>`
        } else if (prioridad <= 3) {
            baja.innerHTML += `<div class="tablon-linea2" id="linea">
            <div class="tablon-titulo">${title}</div>
            <div class="tablon-autor">${autor}</div>
            <div class="tablon-prioridad">${prioridad <= 1 ? 1 : prioridad}</div>
        </div>`
        }
        msg = false;
        iconos.innerHTML = `<button class="btn" id="createMsg" onclick="createForm();">Crear anuncio</button>
        <button class="btn" id="msgs">Mensajes</button>
        <button class="btn" id="perfil">Perfil</button>`
    }
}

function createForm() {
    if(!msg) {
        msg = true;
        iconos.innerHTML = `<input type="text" id="title" placeholder="Titulo">
        <input type="text" id="autor" placeholder="Autor">
        <input type="number" id="prioridad" placeholder="Prioridad (1-10)" min=1 max=10>
        <button onclick="createAd();">Crear anuncio</button>`
    }
}

btnMsg.addEventListener("click", function (){
    createForm();
})

/*
<button class="btn" id="createMsg">Crear anuncio</button>
<button class="btn" id="msgs">Mensajes</button>
<button class="btn" id="perfil">Perfil</button>
*/