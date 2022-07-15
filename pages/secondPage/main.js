let validate = document.getElementById('validate');
let code = document.getElementById('code');

validate.addEventListener('click', () => {
    if (code.value === '29 84 17 59'){
        alert("Correcto, pasaste!");
        window.open("../thirdPage/pO039e.html");
        window.close();
    }else{
        alert('Codigo incorrecto.');
    }
})