let verifyBtn = document.getElementById("verifyBtn");
let startSpeaking = document.getElementById("startSpeaking");
let stopSpeaking = document.getElementById("stopSpeaking");

let realText = "Cuando emigró a Estados Unidos, este autor alemán escribió Anhelo de justicia, un libro en el que reivindica la religión y produjo aceptaciones diferentes.";

startSpeaking.addEventListener('click', () => {
    say(realText);
});

stopSpeaking.addEventListener('click', () => {
    speechSynthesis.cancel();
});

verifyBtn.addEventListener('click', () => {
    let text = document.getElementById("textInput").value;

    if (text == realText) {
        alert("Correcto! Piso 1 completado.");
        window.open('../secondPage/0ix84jA.html');
        window.close();
    }else{
        alert("Incorrecto...");
        window.close();
    }
});

function say(text) {
    let utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'es-ES';
    utter.rate = 0.8;
    speechSynthesis.speak(utter);
}