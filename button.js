let exclusive_enter = document.getElementById("exclusive_enter");
let returnprogress = document.getElementById("returnProgress");
let helpReturnProgress = document.getElementById("helpReturnProgress");
let helpClasifications = document.getElementById("helpClasifications");
let helpAccess = document.getElementById("helpAccess");

exclusive_enter.addEventListener('click', () => {
    let password = prompt("Ingrese la contraseña");
    if (password == "orizonweb_allowed_permission") { 
        let lvl = prompt("Ingrese el nivel de acceso (0-7)");
        returnProgress(lvl);
    } else { alert("Contraseña incorrecta"); }
})

returnprogress.addEventListener('click', () => {
    let password = prompt("Introduzca su contraseña para retornar tu progreso");

    if (password == "diegodiez10") { // Diego
        returnProgress("3");
    }else if (password == "4371239") { // Valentino
        returnProgress("0");
    }else if (password == "LaMamaBailarina77") { // Aylén
        returnProgress("6");
    }else if (password == "0609xxx") { // Taiel
        returnProgress("1");
    }else if (password == "NaGiiTO548903") { // Barbie
        returnProgress("6");
    }else if (password == "turron") { // Uriel
        returnProgress("4");
    }else{
        alert("Ninguna de las contraseñas coincide.")
    }
});

helpReturnProgress.addEventListener('click', () => {
    alert("Si informaste el ultimo nivel con el que estuviste, podes volver a ese nivel con este botón. Solo introduci la contraseña para entrar.")
});

helpClasifications.addEventListener('click', () => {
    alert("Acá podes ver la tabla de posiciones de las personas que van ganando, ¡capaz estas vos!")
});

helpAccess.addEventListener('click', () => {
    alert("Este botón esta solo reservado para admins, es simplemente para hacer pruebas. No lo uses, porfavor")
});

function returnProgress(index) {
    switch (index) {
        case "0":
            window.open("pages/acces/index.html");
        break;
        case "1":
            window.open("pages/firstPage/9f8ad.html");
        break;
        case "2":
            window.open("pages/secondPage/0ix84jA.html");
        break;
        case "3":
            window.open("pages/thirdPage/pO039e.html");
        break;
        case "4":
            window.open("pages/fourthPage/CkLO9ed.html");
        break;
        case "5":
            window.open("pages/fifthPage/NjAo92Sa.html");
        break;
        case "6":
            window.open("pages/sixthPage/LoFJua83.html");
        break;
        case "7":
            window.open("pages/seventhPage/0DJ93MaP.html");
        break;
        default:
            alert("Nivel incorrecto");
        break;
    }
}
