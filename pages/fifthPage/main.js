let password = document.getElementById('password');
let accessBtn = document.getElementById('access-btn');
let ad = document.getElementById('ad');

let phase = 0;

function startsWithCapital(word){
    return word.charAt(0) === word.charAt(0).toUpperCase()
}

document.addEventListener('keypress', function(e) {
    var keycode = e.keyCode || e.which;
    if (keycode == 13) {
      accessBtn.click();
    }
});

accessBtn.addEventListener('click', () => {
    password = document.getElementById('password').value;
    if (phase === 0){
        // comprobar si la contraseña tiene mas de 5 caracteres
        if (password.length >= 5) {
            phase++;
            ad.innerHTML = 'Necesita iniciar con mayúscula (!)';
        }else{
            ad.innerHTML = 'Necesita tener por lo menos 5 caractéres (!)';

        }
    }else if (phase == 1) {
        if (password.length >= 5 && startsWithCapital(password)) {
            phase++;
            ad.innerHTML = 'Necesita por lo menos un número (!)';
        }else{
            ad.innerHTML = 'Necesita tener por lo menos 5 caractéres y iniciar con mayúscula (!)';
        }
    }else if (phase == 2) {
        // comprobar si la contraseña empieza con mayuscula y tiene un numero
        if (password.length >= 5 && startsWithCapital(password) && password.match(/\d/)) {
            phase++;
            ad.innerHTML = 'Necesita tener un simbolo (!)';
        }else{
            ad.innerHTML = 'Necesita tener por lo menos 5 caractéres, iniciar con mayúscula y tener por lo menos un número (!)';
        }
    }else if (phase == 3) {
        // comprobar si la contraseña empieza con mayuscula y tiene un numero y un simbolo
        if (password.length >= 5 && startsWithCapital(password) && password.match(/\d/) && password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
            phase++;
            ad.innerHTML = 'Necesita empezar y finalizar en #</span> (!)';
        }else{
            ad.innerHTML = 'Necesita tener por lo menos 5 caractéres, iniciar con mayúscula, tener por lo menos un número y un simbolo (!)';
        }
    }else if (phase == 4) {
            // comprobar si la contraseña empieza con mayuscula y tiene un numero y un simbolo y que empiece en # y finalice en #
            if (password.length >= 5 && startsWithCapital(password) && password.match(/\d/) && password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) && password.startsWith('#') && password.endsWith('#')) {
            phase++;
            ad.innerHTML = 'Necesita ser un palíndromo <span style="font-size: 20px;color:#f00">(Palabra que empieza y termina de la misma forma)</span> (!)';
        }else{
            ad.innerHTML = 'Necesita tener por lo menos 5 caractéres, iniciar con mayúscula, tener por lo menos un número y un simbolo y terminar en # (!)';
        }
    }else if (phase == 5) {
        // comprobar si la contraseña empieza con mayuscula y tiene un numero y un simbolo y es un palindromo
        if (password.length >= 5 && startsWithCapital(password) && password.match(/\d/) && password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) && password.split('').reverse().join('') === password) {
            phase++;
            ad.innerHTML = 'El nombre es muy largo (!)';
            accessBtn.value = "Salir";
        }else{
            ad.innerHTML = 'Necesita tener por lo menos 5 caractéres, iniciar con mayúscula, tener por lo menos un número, un simbolo, que finalice con # y tiene que ser un palindromo <span style="font-size: 20px;color:#f00">(Palabra que empieza y termina de la misma forma)</span> (!)';
        }
    }else if (phase == 6) {
        phase++;
        ad.innerHTML = '¿Pero por qué te queres ir? (!)';
        accessBtn.value = "Porque si";
    }else if (phase == 7) {
        phase++;
        ad.innerHTML = 'No te voy a dejar salir (!)';
        accessBtn.value = "¿Por qué?";
    }else if (phase == 8) {
        phase++;
        ad.innerHTML = '¡Porque el nombre es muy largo! (!)';
        accessBtn.value = "¿Y qué hago?";
    }else if (phase == 9) {
        phase++;
        ad.innerHTML = '¡Reducí los caractéres del nombre! (!)';
        accessBtn.value = "¡Pero me vas a decir que es invalido!";
    }else if (phase == 10) {
        phase++;
        ad.innerHTML = 'NO IMPORTA. ARREGLALO PONIENDO ALGO, LO QUE SEA. (!)';
        accessBtn.value = "¡Ay, esta bien!";
    }else if (phase == 11) {
        phase++;
        accessBtn.value = "Ingresar";
    }else if (phase == 12) {
        console.log(document.getElementById('password').value);
        if (document.getElementById('password').value == "ALGO, LO QUE SEA.") {
            ad.innerHTML = "";
            accessBtn.style.display = 'none';
            let i = 0;
            let phrases = ["...", "Por fin...", "Alguien inteligente.", "Felicidades, este es mi numero:", "75", "No es mi numero real pero...", "Ya vas a saber que vas a hacer con eso", "Continue tranquilo, maestro :D", ""]
            let invrl = setInterval(() => {
                if (i == 7) {
                    window.open("../sixthPage/LoFJua83.html");
                    window.close();
                    clearInterval(invrl);
                }
                ad.style.color = "#0f0";
                ad.innerHTML = phrases[i] + ' (!)';
                i++;
            }, 2000);
        }else{
            phase++;
            ad.innerHTML = 'Esta bien andáte, estúpido... (!)';
            accessBtn.value = "...";
        }
    }else if (phase == 13) {
        window.open("../sixthPage/LoFJua83.html");
        window.close();
    }
})