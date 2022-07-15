let firstProblem = document.getElementById('firstProblem');
let secondProblem = document.getElementById('secondProblem');
let thirdProblem = document.getElementById('thirdProblem');
let fourthProblem = document.getElementById('fourthProblem');
let fifthProblem = document.getElementById('fifthProblem');

let response = document.getElementById("response");
let response2 = document.getElementById("response2");
let response3 = document.getElementById("response3");
let validate = document.getElementById("validate");
let validate2 = document.getElementById("validate2");
let validate3 = document.getElementById("validate3");

let problemIndex = 1;

validate.addEventListener('click', () => {
    response = document.getElementById("response");
    if (response.value == "3") {
        response.style.color = "green";
        problemIndex++;
        alert("Correcto!");
        firstProblem.style.display = "none";
        secondProblem.style.display = "block";
    }else{
        response.style.color = "red";
        alert("Incorrecto!");
        window.close();
    }
});
    
validate2.addEventListener('click', () => {
    response2 = document.getElementById("response2");
    if (response2.value == "33") {
        response2.style.color = "green";
        problemIndex++;
        alert("Correcto!");
        secondProblem.style.display = "none";
        thirdProblem.style.display = "block";  
    }else{
        response.style.color = "red";
        alert("Incorrecto!");
        window.close();
    }
});

validate3.addEventListener('click', () => {
    response3 = document.getElementById("response3");
    if (response3.value == "208") {
        response3.style.color = "green";
        problemIndex++;
        alert("Correcto! Pasaste de piso!");
        window.open("../fourthPage/CkLO9ed.html");
        window.close();
    }else{
        response3.style.color = "red";
        alert("Incorrecto!");
        window.close();
    }
});