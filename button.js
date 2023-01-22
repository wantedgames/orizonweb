let exclusive_enter = document.getElementById("exclusive_enter");
let returnprogress = document.getElementById("returnProgress");
let helpReturnProgress = document.getElementById("helpReturnProgress");
let helpClasifications = document.getElementById("helpClasifications");
let helpAccess = document.getElementById("helpAccess");

exclusive_enter.addEventListener('click', () => {
    let lvl = prompt("Ingrese el nivel de acceso (0-7)");
    returnProgress(lvl);
})

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
