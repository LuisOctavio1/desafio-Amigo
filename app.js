// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo(){
    const input = document.getElementById("amigo");
            const nombre = input.value.trim();
            console.log("dsadasda")
            if (nombre === "") {
                alert("Por favor, ingresa un nombre válido.");
                return;
            }
            nombres.push(nombre);
            actualizarLista();
            input.value = "";
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    const indice = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").textContent = `El amigo secreto es: ${nombres[indice]}`;
    nombres.splice(indice,1)
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

