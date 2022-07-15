// Variables

let canvas = document.querySelector(".canvasSequence")

let phrases = [
    "Autenticando...",
    "Porfavor, espere...",
    "Checkeando conectividad...",
    "Conectado.",

    "Iniciando sesión...",
    "Porfavor, espere...",
    "Usuario Iniciado.",
    "Cargando página...",
]

let index = 0;

// Main Sequence

canvas.innerHTML = `<h1>> Conectando...</h1>`

let time = setInterval(() => {
    canvas.innerHTML += `<h1>> ${phrases[index]}</h1>`
    index++;
    if (index == phrases.length) {
        clearInterval(time);
        canvas.innerHTML = `<h1>> Necesitamos comprobar quien eres.</h1>`
        secondSequence();
    } 
}, 800);

function secondSequence() {
    setTimeout(function() {
        canvas.innerHTML += `<h1>> Contraseña: <span style="color: #000;">orizon_web_permission</span></h1>`
        canvas.innerHTML += `<input
         type="text" id="password">`
        canvas.innerHTML += `<button id="button">Entrar</button>`
        document.querySelector("#button").addEventListener("click", function() {
            if (document.querySelector("#password").value == "orizon_web_permission") {
                canvas.innerHTML = `<h1>> Bienvenido.</h1>`
                thirdSequence();
            }else{
                canvas.innerHTML = `<h1>> Contraseña incorrecta.</h1>`
                window.close();
            }
        }, 2500);  
    }, 1000);

}

function thirdSequence() {
    let phrases2 = [
        "<h1>> Estas a punto de iniciar.</h1>",
        "<h1>> Esto se divide en pisos.</h1>",
        "<h1>> Estas por entrar al primer piso.</h1>",
        "<h1>> No te voy a decir cuantos hay.</h1>",
        "<h1>> Acordate, TODO esta escondido, busca muy bien.</h1>",
        '<h1>> Mucha suerte. <a style="color: #0f0" href="../firstPage/9f8ad.html">Presiona aqui para entrar</a></h1>',
        ""
    ]
    let index2 = 0;
    let time2 = setInterval(() => {
        canvas.innerHTML += phrases2[index2];
        index2++;
        if (index2 == phrases2.length) {
            clearInterval(time2);
        }
    }, 2000);
}