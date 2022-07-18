let accessButton = document.getElementById('accessButton');
let passwordInput = document.getElementById('passwordInput').value;

let img = document.getElementById('img');

let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');

let unlockIncorrect = new Audio("unlockIncorrect.mp3");
let unlockCorrect = new Audio("unlockCorrect.mp3");

let unlock1 = false;
let unlock2 = false;

link1.addEventListener('click', () => { window.open("https://youtu.be/I5ErJJrPpUQ") });
link2.addEventListener('click', () => { window.open("https://youtu.be/F0l9qYabvVQ") });
link3.addEventListener('click', () => { window.open("https://youtu.be/fHGqpIKkDpI") });

accessButton.addEventListener('click', () => {
    passwordInput = document.getElementById('passwordInput').value;
    if (passwordInput == "39278402") {
        unlockCorrect.play();
        img.innerHTML = '<img src="caja-fuerte-abierta.png">';
        setTimeout(() =>{
            if (unlock1 && unlock2) {
                alert("! Hola.");
                alert("¡ Hola.")
                alert("! Somos hermanos, y te queriamos agradecer..");
                alert("¡ Por juntarnos de nuevo :D");
                alert("! En recompensa,");
                alert("¡ Queremos mostrarte algo especial...");
                alert("!¡ Espero que lo valores :D, disfrutalo.");
                window.open("https://youtu.be/a5kEfePZ7VQ");
                setTimeout(() => {
                    img.innerHTML = '<img src="caja-fuerte.png">';
                    unlock1 = false;
                    unlock2 = false;
                }, 300);
            }else{
                alert("Hola...");
                alert("¿Como estas?");
                alert("Como yo, hay otra persona encerrada.");
                alert("Gracias por sacarme.");
                alert("Escuchame.");
                alert("Necesito que liberes a la otra persona para poder mostrarte algo especial.")
                alert("Volve a sacarme de aca cuando hayas hablado con la otra persona");
                setTimeout(() => {
                    img.innerHTML = '<img src="caja-fuerte.png">';
                    unlock1 = true;
                }, 300);
            }
        }, 800);
    }else if (passwordInput == "56192843") {
        unlockCorrect.play();
        img.innerHTML = '<img src="caja-fuerte-abierta.png">';
        setTimeout(() => {
            if (!unlock1) {
                alert("¿?");
                alert("...");
                alert("Todavia no.");
                setTimeout(() => {
                    img.innerHTML = '<img src="caja-fuerte.png">';
                }, 300);
            }else{
                alert("¿?");
                alert("...");
                alert("Ah, si...");
                alert("Hola, ya hablaste con la otra persona.");
                alert("Necesito que ella sepa que ya me liberaste.");
                alert("Habla de nuevo con ella para poder empezar.");
                setTimeout(() => {
                    img.innerHTML = '<img src="caja-fuerte.png">';
                    unlock2 = true;
                }, 300);
            }
        }, 800)
    }else if (passwordInput == "75") {
        unlockCorrect.play();
        img.innerHTML = '<img src="caja-fuerte-abierta.png">';
        setTimeout(() => {
            alert("¿?");
            alert("¡Ah! Este es el inteligente.");
            let status = prompt("Hola ¿Como estas?");
            alert("¿"+status+"? Me alegro.");
            let name = prompt("¿Cual es tu nombre? Ponelo completo, no abreviaciones");
            let name2 = name.toUpperCase();
            if (name2 == "AYLÉN" || name2 == "BAUTISTA" || name2 == "BENICIO" || name2 == "DIEGO" || name2 == "URIEL" || name2 == "VALENTINO" || name2 == "MATIAS" || name2 == "TAIEL" || name2 == "BARBIE") {
                alert("¡¿"+name+"?!");
                alert("¡No lo puedo creer, " + name + "! Me hablaron mucho de vos.");
                alert("¡No te preocupes, " + name + "! Nada malo, ¡todo bien!");
                alert("Me contaron que estas participando en un evento en el cual, si ganas, ¡vas a ganar un premio!");
                alert("¡Wow, que locura!");
                alert("Te deseo muchísima suerte, " + name);
                alert("Si ganas, recordame porfavor");
                alert("Me llamo sujeto00, ¿me conoces?");
                alert("¡No importa, no me lo digas, solo recordame!");
                alert("Nos vamos a ver pronto, ¡acordate!");
                alert('¿Pistas? Si: "2 personas, 1 habitacion, 1 bala y 1 arma"');
                alert("¡Hasta luego!");
            }else if (name2 == "THIAGO") {
                alert("¡Ah, hola!");
                alert("Si, si, antes que me lo digas ya se que si me encuentro a alguien de los que me dijiste los voy a saludar");
                alert("Aunque no tenga ni la mínima idea de quien sea");
                alert("Siempre me obligan a hacer lo que me digan...");
                alert("Bueno...")
                alert("Chau!");
            }else{
                alert("¡Hola, "+name+ "!");
                alert("No me conoces ni te conozco, pero me gusta tu nombre.");
                alert("Emmm, bueno...");
                alert("¡Chau!");
            }
            setTimeout(() => {
                img.innerHTML = '<img src="caja-fuerte.png">';
            }, 300);
        }, 300);
    }else if (passwordInput == "98475") {
        unlockCorrect.play();
        img.innerHTML = '<img src="caja-fuerte-cerrada.png">';
        setTimeout(() => {
            window.open("../seventhPage/0DJ93MaP.html");
            window.close();
            img.innerHTML = '<img src="caja-fuerte.png">';
        }, 300);
    }else{
        unlockIncorrect.play();
        img.innerHTML = '<img src="caja-fuerte-abierta.png">';
        setTimeout(() => {
            img.innerHTML = '<img src="caja-fuerte.png">';
        }, 500);
    }
});
