const frases = [

    "Eres tan perfecto como un Lamborghini. 💙",

    "Si fueras un Ferrari FS90, serías el que todos quieren, pero yo tuve la suerte de encontrarte. 🏎️💙",

    "No sé mucho de carros, pero sé que tú eres mi modelo favorito. 💙",

    "Eres como un Mustang: imposible no quedarse mirándote. 😍💙",

    "Si mi corazón fuera una carretera, tú serías mi destino. 🛣️💙",

    "No necesito velocidad, solo necesito recorrer la vida contigo. 💙",

    "Entre tantos caminos, qué bonito fue encontrar el que lleva hacia ti. 🥹💙",

    "Eres mi persona favorita para compartir cualquier viaje, incluso los que no tienen destino. 💙",

    "Hay cosas bonitas, cosas increíbles y luego estás tú. ❤️‍🩹💙",

    "Si pudiera elegir mi copiloto para toda la vida, ya sé a quién escogería. 🏎️💙"

];


let indice = 0;


function cambiarFrase() {

    const frase = document.getElementById("frase");

    const contador = document.getElementById("contador");


    // Animación de salida

    frase.style.opacity = "0";

    frase.style.transform = "translateY(10px)";


    setTimeout(() => {

        // Cambiar frase

        frase.textContent = frases[indice];


        // Mostrar nueva frase

        frase.style.opacity = "1";

        frase.style.transform = "translateY(0)";


        // Actualizar contador

        contador.textContent =
            `${indice + 1} / ${frases.length}`;


        // Pasar a la siguiente frase

        indice++;


        if (indice >= frases.length) {

            indice = 0;

        }

    }, 250);

}
