// Array para guardar los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    console.log(amigos);
    inputAmigo.value = "";
}