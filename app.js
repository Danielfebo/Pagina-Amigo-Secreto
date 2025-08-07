// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoAleatorio = '';

function agregarAmigo() {
    let amigoUsuario = document.querySelector('#amigo').value;
    if (amigoUsuario == '') {
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(amigoUsuario);
        mostrarAmigos();
        limpiarCaja();
        document.getElementById('resultado').innerHTML = ""; // Limpia el resultado anterior
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    // 2. Limpiar la lista existente
    lista.innerHTML = "";
    // 3. Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un nuevo elemento <li>
        let li = document.createElement('li');
        li.textContent = amigos[i];
        // 5. Agregar el <li> a la lista
        lista.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoAleatorio = amigos[indiceAleatorio];
    }
    document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoAleatorio}`;
}

