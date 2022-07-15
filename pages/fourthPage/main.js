let displayer = document.getElementById("displayer");
let btn = document.getElementById("btn");

let clicks = 0;
let burning = 0;

let time = setInterval(function(){
    console.log(burning)
    if (burning > 0) {
        burning--;
        if (burning == 0) {
            btn.style.backgroundColor = "rgb(255, 255, 255)";
        }else if (burning == 1) {
            btn.style.backgroundColor = "rgb(255, 178, 178)";
            btn.style.fontSize = "75px";
        }else if (burning == 2) {
            btn.style.backgroundColor = "rgb(255, 154, 154)";
            btn.style.fontSize = "80px";
        }else if (burning == 3) {
            btn.style.backgroundColor = "rgb(255, 135, 135)";
            btn.style.fontSize = "85px";
        }else if (burning == 4) {
            btn.style.backgroundColor = "rgb(255, 113, 113)";
            btn.style.fontSize = "90px";
        }else if (burning == 5) {
            btn.style.backgroundColor = "rgb(255, 91, 91)";
            btn.style.fontSize = "95px";
        }else if (burning == 6) {
            btn.style.backgroundColor = "rgb(255, 69, 69)";
            btn.style.fontSize = "100px";
        }else if (burning == 7) {
            btn.style.backgroundColor = "rgb(255, 47, 47)";
            btn.style.fontSize = "110px";
        }else if (burning == 8) {
            btn.style.backgroundColor = "rgb(255, 25, 25)";
            btn.style.fontSize = "120px";
        }else if (burning == 9) {
            btn.style.backgroundColor = "rgb(255, 0, 0)";
            btn.style.fontSize = "130px";
        }
    }
}, 250);

btn.addEventListener("click", function(event) {
    if (clicks == 200) {
        alert("¡Lo hiciste!");
        window.open("../fifthPage/NjAo92Sa.html");
        window.close();
    }else{
        clicks++;
        displayer.innerHTML = `<h3>${clicks}</h3>`;
        burning++;
    }
});