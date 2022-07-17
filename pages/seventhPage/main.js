//#region Variables

let separators = document.getElementById('separators');
let separators2 = document.getElementById('separators2');
let msg = document.getElementById('msg');
let dialogs = document.getElementById('dialogs');
let healthDisplayer = document.getElementById('healthDisplayer');
let patienceDisplayer = document.getElementById('patience');
let hud = document.getElementById('hudControllers');
let heart = document.getElementById('heart'); // CURSOR
let fight = document.getElementById('fight');
fight.style.display = 'none';

let bg = document.getElementById('bg'); // THIS CONTAINS ALL
let failed = document.getElementById('failed');
failed.style.display = 'none';

let phrases = ["Estas en la recta final", "Vos podes", "No lo arruines ahora", "Porque a partir de este punto", "NO PODES GUARDAR PROGRESO", "...", "Mucha suerte."];
let index = 0;
let health = 5;
let sansTiredness = 0;

let inBattle = false;
let inRest = false;

let cooldown = false;
let detected = false;
let skipped = false;

let container = document.getElementById('container');

let music = new Audio("music.mp3");
let megalovania = new Audio("megalovania.mp3");
let preAttack = new Audio("pre-attack.mp3");
let attack = new Audio("attack.mp3");
let damage = new Audio("damage.mp3");
let startingBattle = new Audio("battle.mp3");
let attackFight = new Audio('attack-fight.mp3');
let sansDying = new Audio('sans-dying.mp3');

let part1 = document.getElementById('part1');
let part2 = document.getElementById('part2');
let part3 = document.getElementById('part3');
let part4 = document.getElementById('part4');
let part5 = document.getElementById('part5');

//#endregion

//#region Colissions
part1.onmouseover = () => {
    if (inBattle) {
        let elementStyle = window.getComputedStyle(part1);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(255, 255, 255)' && !cooldown) {
            cooldown = true;
            damage.play();
            health--;
            checkHealth(health);
        }
    }else{
        let elementStyle = window.getComputedStyle(part1);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(0, 0, 255)' && !detected) {
            detected = true;
            setTimeout(() => {
                secondCinematic();
            }, 500)
        }
    }
}

part2.onmouseover = () => {
    if (inBattle) {
        let elementStyle = window.getComputedStyle(part2);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(255, 255, 255)' && !cooldown) {
            cooldown = true;
            damage.play();
            health--;
            checkHealth(health);
        }
    }else{
        let elementStyle = window.getComputedStyle(part1);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(0, 0, 255)' && !detected) {
            detected = true;
            setTimeout(() => {
                secondCinematic();
            }, 500)
        }
    }
}

part3.onmouseover = () => {
    if (inBattle) {
        let elementStyle = window.getComputedStyle(part3);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(255, 255, 255)' && !cooldown) {
            cooldown = true;
            damage.play();
            health--;
            checkHealth(health);
        }
    }else{
        let elementStyle = window.getComputedStyle(part1);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(0, 0, 255)' && !detected) {
            setTimeout(() => {
                secondCinematic();
            }, 500)
        }
    }
}

part4.onmouseover = () => {
    if (inBattle) {
        let elementStyle = window.getComputedStyle(part4);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(255, 255, 255)' && !cooldown) {
            cooldown = true;
            damage.play();
            health--;
            checkHealth(health);
        }
    }else{
        let elementStyle = window.getComputedStyle(part1);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(0, 0, 255)' && !detected) {
            setTimeout(() => {
                secondCinematic();
            }, 500)
        }
    }
}

part5.onmouseover = () => {
    if (inBattle) {
        let elementStyle = window.getComputedStyle(part5);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(255, 255, 255)' && !cooldown) {
            cooldown = true;
            damage.play();
            health--;
            checkHealth(health);
        }
    }else{
        let elementStyle = window.getComputedStyle(part1);
        let elementBackgroundColor = elementStyle.getPropertyValue('background-color');
        console.log(elementBackgroundColor)
        if (elementBackgroundColor == 'rgb(0, 0, 255)' && !detected) {
            setTimeout(() => {
                secondCinematic();
            }, 500)
        }
    }
}

document.getElementById('border').onmouseover = () => {
    if (inBattle) {
        alert("¡NO SAQUES EL CURSOR!");
        location.reload();
    }
}

document.getElementById('border1').onmouseover = () => {
    if (inBattle) {
        alert("¡NO SAQUES EL CURSOR!");
        location.reload();
    }else if (inRest) {
        document.getElementById('border1').style.display = 'none';
        fight.style.display = 'block';
    }
}

//#endregion

//#region LEVELS & MORE

function checkHealth(health) {
    if (health == 5) {
        healthDisplayer.innerHTML = `<img id ="lifeBar" src="assets/bar/bar-5.png"></img>`;
    }else if (health == 4) {
        healthDisplayer.innerHTML = `<img id ="lifeBar" src="assets/bar/bar-4.png"></img>`;
    }else if (health == 3) {
        healthDisplayer.innerHTML = `<img id ="lifeBar" src="assets/bar/bar-3.png"></img>`;
    }else if (health == 2) {
        healthDisplayer.innerHTML = `<img id ="lifeBar" src="assets/bar/bar-2.png"></img>`;
    }else if (health == 1) {
        healthDisplayer.innerHTML = `<img id ="lifeBar" src="assets/bar/bar-1.png"></img>`;
    }else if (health == 0) {
        healthDisplayer.innerHTML = `<img id ="lifeBar" src="assets/bar/bar-0.png"></img>`;
        megalovania.pause();
        bg.style.display = 'none';
        inBattle = false;
        failed.style.display = 'block';
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function principalCinematic() {
    part1.style.backgroundColor = "#00f";
    part2.style.backgroundColor = "#00f";
    part3.style.backgroundColor = "#00f";
}

function secondCinematic() {
    msg.style.display = 'none';
    part1.style.backgroundColor = '#000';
    part2.style.backgroundColor = '#000';
    part3.style.backgroundColor = '#000';
    document.getElementById('border').style.backgroundColor = "#f00";
    document.getElementById('border1').style.backgroundColor = "#f00";
    dialogs.innerHTML = "Jaja, Preparate...";
    setTimeout(() => {
        inBattle = true;
    }, 2000)
}

function updatePatience(value) {
    patienceDisplayer.innerHTML = `<h3>Cansancio de Sans: ${value}%</h3>`;
}

function levelOne() {
    startingBattle.play();
    setTimeout(() => {
        if (!skipped) {
            music.pause();
            skipped = true;
        }
        megalovania.volume = 0.8;
        megalovania.loop = true
        megalovania.play();
        let counter = 0;

        preAttack.volume = 0.3;
        attack.volume = 0.3;

        separators.innerHTML = "";
        separators2.innerHTML = `<br>`;

        document.getElementById('bg').style.backgroundImage = "url('assets/fight-bg.png')";
        healthDisplayer.innerHTML = `<img id ="lifeBar" src="assets/bar/bar-5.png"></img>`;
        container.innerHTML = `<img id="sans" src="assets/sans.gif">`;
        let sans = document.getElementById('sans');
        sans.style.top = "60px";
        updatePatience(sansTiredness);
        principalCinematic();
        dialogs.innerHTML = "Hola humano, pone el cursor en los espacios en azul y movelo un poco";

        let interval2 = setInterval(() => {
            if (inBattle) {
                cooldown = false;
                if (health <= 0) {
                    checkHealth(health);
                }else{
                    let pos = [1, 2, 3];
                    let choosenPos = pos[getRandomInt(3)];
                    console.log(choosenPos);

                    if (choosenPos == 1) {
                        preAttack.play();
                        part1.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part1.style.backgroundColor = "#fff";
                            part1.innerHTML = "ㅤ";
                        }, 500)
                        part1.style.backgroundColor = "#000";
                    }else if (choosenPos == 2) {
                        preAttack.play();
                        part2.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part2.style.backgroundColor = "#fff";
                            part2.innerHTML = "ㅤ";
                        }, 500)
                        part2.style.backgroundColor = "#000";
                    }else if (choosenPos == 3) {
                        ultimateChoose = choosenPos
                        preAttack.play();
                        part3.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part3.style.backgroundColor = "#fff";
                            part3.innerHTML = "ㅤ";  
                        }, 500)
                        part3.style.backgroundColor = "#000";
                    }

                    part1.style.backgroundColor = "#000";
                    part2.style.backgroundColor = "#000";
                    part3.style.backgroundColor = "#000";

                    counter++

                    if (counter >= 10) {
                        setTimeout(() => {
                            sansTiredness += 10;
                            updatePatience(sansTiredness);
                            part1.style.backgroundColor = "#000";
                            part2.style.backgroundColor = "#000";
                            part3.style.backgroundColor = "#000";
                            levelTwo();
                            clearInterval(interval2)
                        }, 500)
                    }
                }
            }

        }, 1200);
    }, 1000)
}

function levelTwo() {
    part1.style.backgroundColor = "#000";
    part2.style.backgroundColor = "#000";
    part3.style.backgroundColor = "#000";
    dialogs.innerHTML = `Jejeje, muy bien, a ver si podes con esto`;
    counter = 0;

    setTimeout(() => {
        let interval3 = setInterval(() => {
            if (inBattle) {
                cooldown = false;
                if (health <= 0) {
                    checkHealth(health);
                }else{
                    let pos = [1, 2, 3];
                    let choosenPos = pos[getRandomInt(3)];
                    let choosenPos2 = pos[getRandomInt(3)];
                    console.log(choosenPos);
                    console.log(choosenPos2);

                    if (choosenPos == 1) {
                        preAttack.play();
                        part1.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part1.style.backgroundColor = "#fff";
                            part1.innerHTML = "ㅤ";
                        }, 500)
                        part1.style.backgroundColor = "#000";
                    }else if (choosenPos == 2) {
                        preAttack.play();
                        part2.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part2.style.backgroundColor = "#fff";
                            part2.innerHTML = "ㅤ";
                        }, 500)
                        part2.style.backgroundColor = "#000";
                    }else if (choosenPos == 3) {
                        ultimateChoose = choosenPos
                        preAttack.play();
                        part3.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part3.style.backgroundColor = "#fff";
                            part3.innerHTML = "ㅤ";  
                        }, 500)
                        part3.style.backgroundColor = "#000";
                    }

                    if (choosenPos2 == 1) {
                        preAttack.play();
                        part1.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part1.style.backgroundColor = "#fff";
                            part1.innerHTML = "ㅤ";
                        }, 500)
                        part1.style.backgroundColor = "#000";
                    }else if (choosenPos2 == 2) {
                        preAttack.play();
                        part2.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part2.style.backgroundColor = "#fff";
                            part2.innerHTML = "ㅤ";
                        }, 500)
                        part2.style.backgroundColor = "#000";
                    }else if (choosenPos2 == 3) {
                        preAttack.play();
                        part3.innerHTML = "!";
                        setTimeout(() => {
                            attack.play();
                            part3.style.backgroundColor = "#fff";
                            part3.innerHTML = "ㅤ";  
                        }, 500)
                        part3.style.backgroundColor = "#000";
                    }

                    part1.style.backgroundColor = "#000";
                    part2.style.backgroundColor = "#000";
                    part3.style.backgroundColor = "#000";

                    counter++;

                    if (counter >= 10) {
                        setTimeout(() => {
                            sansTiredness += 10;
                            updatePatience(sansTiredness);
                            part1.style.backgroundColor = "#000";
                            part2.style.backgroundColor = "#000";
                            part3.style.backgroundColor = "#000";
                            levelThree();
                            clearInterval(interval3);
                        }, 500)
                    }
                }
            }
        }, 1200);
    }, 2000);
}

function levelThree() {
    part1.style.backgroundColor = "#000";
    part2.style.backgroundColor = "#000";
    part3.style.backgroundColor = "#000";
    dialogs.innerHTML = `¿¡Huh!? Esto es MÁS dificil >:D`;
    counter = 0;

    setTimeout(() => {
        let interval4 = setInterval(() => {
            if (inBattle) {
                cooldown = false;
                if (health <= 0) {
                    checkHealth(health);
                }else{
                    let dir = getRandomInt(360);
                    console.log(dir);


                    dir = getRandomInt(360);
                    preAttack.play();
                    part1.style.transform = "rotate(" + dir + "deg)";
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";


                    dir = getRandomInt(360);
                    preAttack.play();
                    part2.style.transform = "rotate(" + dir + "deg)";
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";


                    dir = getRandomInt(360);
                    preAttack.play();
                    part3.style.transform = "rotate(" + dir + "deg)";
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)
                    part3.style.backgroundColor = "#000";

                    part1.style.backgroundColor = "#000";
                    part2.style.backgroundColor = "#000";
                    part3.style.backgroundColor = "#000";

                    counter++;

                    if (counter >= 15) {
                        setTimeout(() => {
                            sansTiredness += 10;
                            updatePatience(sansTiredness);
                            part1.style.backgroundColor = "#000";
                            part2.style.backgroundColor = "#000";
                            part3.style.backgroundColor = "#000";
                            levelFour();
                            clearInterval(interval4);
                        }, 500)
                    }
                }
            }
        }, 1200);
    }, 2000)
}

function levelFour() {
    part1.style.backgroundColor = "#000";
    part2.style.backgroundColor = "#000";
    part3.style.backgroundColor = "#000";
    part1.style.transform = "rotate(0deg)";
    part2.style.transform = "rotate(0deg)";
    part3.style.transform = "rotate(0deg)";
    dialogs.innerHTML = `¡Todavía MÁS dificil!`;
    counter = 0;

    setTimeout(() => {
        let interval5 = setInterval(() => {
            if (inBattle) {
                cooldown = false;
                if (health <= 0) {
                    checkHealth(health);
                }else{
                    let dir = getRandomInt(360);
                    console.log(dir);

                    for (let i=0;i<10;i++) {
                        setTimeout(() => {
                            dir = getRandomInt(360);
                            part1.style.transform = "rotate(" + dir + "deg)";
                            dir = getRandomInt(360);
                            part2.style.transform = "rotate(" + dir + "deg)";
                            dir = getRandomInt(360);
                            part3.style.transform = "rotate(" + dir + "deg)";
                        }, 100)
                    }

                    dir = getRandomInt(360);
                    preAttack.play();
                    part1.style.transform = "rotate(" + dir + "deg)";
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";

                    dir = getRandomInt(360);
                    preAttack.play();
                    part2.style.transform = "rotate(" + dir + "deg)";
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";

                    dir = getRandomInt(360);
                    preAttack.play();
                    part3.style.transform = "rotate(" + dir + "deg)";
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)

                    part1.style.backgroundColor = "#000";
                    part2.style.backgroundColor = "#000";
                    part3.style.backgroundColor = "#000";

                    counter++;

                    if (counter >= 15) {
                        setTimeout(() => {
                            sansTiredness += 20;
                            updatePatience(sansTiredness);
                            part1.style.backgroundColor = "#000";
                            part2.style.backgroundColor = "#000";
                            part3.style.backgroundColor = "#000";
                            levelFive();
                            clearInterval(interval5);
                        }, 500)
                    }
                }
            }
        }, 900);
    }, 2000);
}

function levelFive() {
    sansTiredness = 50;
    part1.style.transform = "rotate(0deg)";
    part2.style.transform = "rotate(0deg)";
    part3.style.transform = "rotate(0deg)";
    index = 0;
    let interval = setInterval(() => {
        let phrases2 = ["Uff...", "¿¡Cuanto vas a aguantar!?", "¡YA VAS A VER!"]
        dialogs.innerHTML = phrases2[index];
        index++;

        if (dialogs.innerHTML == "undefined") {
            levelSix();
            clearInterval(interval);
        }
    }, 1500)
}

function levelSix() {
    part1.style.backgroundColor = "#000";
    part2.style.backgroundColor = "#000";
    part3.style.backgroundColor = "#000";
    part4.style.display = "block";
    part5.style.display = "block";
    part4.style.backgroundColor = "#000";
    part5.style.backgroundColor = "#000";
    dialogs.innerHTML = `Mas espacio para moverte, mas obstaculos...`;
    
    counter = 0;

    let interval2 = setInterval(() => {
        if (inBattle) {
            cooldown = false;
            if (health <= 0) {
                checkHealth(health);
            }else{
                let pos = [1, 2, 3, 4, 5];
                let choosenPos = pos[getRandomInt(5)];
                console.log(choosenPos);

                if (choosenPos == 1) {
                    preAttack.play();
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";
                }else if (choosenPos == 2) {
                    preAttack.play();
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";
                }else if (choosenPos == 3) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)
                    part3.style.backgroundColor = "#000";
                }else if (choosenPos == 4) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part4.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part4.style.backgroundColor = "#fff";
                        part4.innerHTML = "ㅤ";  
                    }, 500)
                    part4.style.backgroundColor = "#000";
                }else if (choosenPos == 5) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part5.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part5.style.backgroundColor = "#fff";
                        part5.innerHTML = "ㅤ";  
                    }, 500)
                    part5.style.backgroundColor = "#000";
                }

                part1.style.backgroundColor = "#000";
                part2.style.backgroundColor = "#000";
                part3.style.backgroundColor = "#000";
                part4.style.backgroundColor = "#000";
                part5.style.backgroundColor = "#000";

                counter++

                if (counter >= 10) {
                    setTimeout(() => {
                        sansTiredness += 10;
                        updatePatience(sansTiredness);
                        part1.style.backgroundColor = "#000";
                        part2.style.backgroundColor = "#000";
                        part3.style.backgroundColor = "#000";
                        part4.style.backgroundColor = "#000";
                        part5.style.backgroundColor = "#000";
                        levelSeven();
                        clearInterval(interval2)
                    }, 500)
                }
            }
        }

    }, 1000);
}

function levelSeven() {
    part1.style.backgroundColor = "#000";
    part2.style.backgroundColor = "#000";
    part3.style.backgroundColor = "#000";
    part4.style.backgroundColor = "#000";
    part5.style.backgroundColor = "#000";
    dialogs.innerHTML = `¡TRIPLE!`;
    
    counter = 0;

    let interval2 = setInterval(() => {
        if (inBattle) {
            cooldown = false;
            if (health <= 0) {
                checkHealth(health);
            }else{
                let pos = [1, 2, 3, 4, 5];
                let choosenPos = pos[getRandomInt(5)];
                let choosenPos2 = pos[getRandomInt(5)];
                let choosenPos3 = pos[getRandomInt(5)];
                console.log(choosenPos);

                if (choosenPos == 1) {
                    preAttack.play();
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";
                }else if (choosenPos == 2) {
                    preAttack.play();
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";
                }else if (choosenPos == 3) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)
                    part3.style.backgroundColor = "#000";
                }else if (choosenPos == 4) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part4.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part4.style.backgroundColor = "#fff";
                        part4.innerHTML = "ㅤ";  
                    }, 500)
                    part4.style.backgroundColor = "#000";
                }else if (choosenPos == 5) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part5.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part5.style.backgroundColor = "#fff";
                        part5.innerHTML = "ㅤ";  
                    }, 500)
                    part5.style.backgroundColor = "#000";
                }

                if (choosenPos2 == 1) {
                    preAttack.play();
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";
                }else if (choosenPos2 == 2) {
                    preAttack.play();
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";
                }else if (choosenPos2 == 3) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)
                    part3.style.backgroundColor = "#000";
                }else if (choosenPos2 == 4) {
                    preAttack.play();
                    part4.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part4.style.backgroundColor = "#fff";
                        part4.innerHTML = "ㅤ";  
                    }, 500)
                    part4.style.backgroundColor = "#000";
                }else if (choosenPos2 == 5) {
                    preAttack.play();
                    part5.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part5.style.backgroundColor = "#fff";
                        part5.innerHTML = "ㅤ";  
                    }, 500)
                    part5.style.backgroundColor = "#000";
                }

                if (choosenPos3 == 1) {
                    preAttack.play();
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";
                }else if (choosenPos3 == 2) {
                    preAttack.play();
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";
                }else if (choosenPos3 == 3) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)
                    part3.style.backgroundColor = "#000";
                }else if (choosenPos3 == 4) {
                    preAttack.play();
                    part4.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part4.style.backgroundColor = "#fff";
                        part4.innerHTML = "ㅤ";  
                    }, 500)
                    part4.style.backgroundColor = "#000";
                }else if (choosenPos3 == 5) {
                    preAttack.play();
                    part5.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part5.style.backgroundColor = "#fff";
                        part5.innerHTML = "ㅤ";  
                    }, 500)
                    part5.style.backgroundColor = "#000";
                }

                part1.style.backgroundColor = "#000";
                part2.style.backgroundColor = "#000";
                part3.style.backgroundColor = "#000";
                part4.style.backgroundColor = "#000";
                part5.style.backgroundColor = "#000";

                counter++

                if (counter >= 10) {
                    setTimeout(() => {
                        sansTiredness += 10;
                        updatePatience(sansTiredness);
                        part1.style.backgroundColor = "#000";
                        part2.style.backgroundColor = "#000";
                        part3.style.backgroundColor = "#000";
                        levelEight();
                        clearInterval(interval2)
                    }, 500)
                }
            }
        }

    }, 950);
}

function levelEight() {
    part1.style.backgroundColor = "#000";
    part2.style.backgroundColor = "#000";
    part3.style.backgroundColor = "#000";
    part4.style.backgroundColor = "#000";
    part5.style.backgroundColor = "#000";
    dialogs.innerHTML = `:)`;
    
    counter = 0;

    let interval2 = setInterval(() => {
        if (inBattle) {
            cooldown = false;
            if (health <= 0) {
                checkHealth(health);
            }else{
                let dir = getRandomInt(360);
                console.log(dir);
                for (let i=0;i<10;i++) {
                    setTimeout(() => {
                        dir = getRandomInt(360);
                        part1.style.transform = "rotate(" + dir + "deg)";
                        dir = getRandomInt(360);
                        part2.style.transform = "rotate(" + dir + "deg)";
                        dir = getRandomInt(360);
                        part3.style.transform = "rotate(" + dir + "deg)";
                    }, 100)
                }

                dir = getRandomInt(360);
                preAttack.play();
                part1.style.transform = "rotate(" + dir + "deg)";
                part1.innerHTML = "!";
                setTimeout(() => {
                    attack.play();
                    part1.style.backgroundColor = "#fff";
                    part1.innerHTML = "ㅤ";
                }, 500)

                part1.style.backgroundColor = "#000";
                dir = getRandomInt(360);
                preAttack.play();
                part2.style.transform = "rotate(" + dir + "deg)";
                part2.innerHTML = "!";
                setTimeout(() => {
                    attack.play();
                    part2.style.backgroundColor = "#fff";
                    part2.innerHTML = "ㅤ";
                }, 500)

                part3.style.backgroundColor = "#000";
                dir = getRandomInt(360);
                preAttack.play();
                part3.style.transform = "rotate(" + dir + "deg)";
                part3.innerHTML = "!";
                setTimeout(() => {
                    attack.play();
                    part3.style.backgroundColor = "#fff";
                    part3.innerHTML = "ㅤ";  
                }, 500)

                part4.style.backgroundColor = "#000";
                dir = getRandomInt(360);
                preAttack.play();
                part4.style.transform = "rotate(" + dir + "deg)";
                part4.innerHTML = "!";
                setTimeout(() => {
                    attack.play();
                    part4.style.backgroundColor = "#fff";
                    part4.innerHTML = "ㅤ";  
                }, 500)

                part5.style.backgroundColor = "#000";
                dir = getRandomInt(360);
                preAttack.play();
                part5.style.transform = "rotate(" + dir + "deg)";
                part5.innerHTML = "!";
                setTimeout(() => {
                    attack.play();
                    part5.style.backgroundColor = "#fff";
                    part5.innerHTML = "ㅤ";  
                }, 500)

                part1.style.backgroundColor = "#000";
                part2.style.backgroundColor = "#000";
                part3.style.backgroundColor = "#000";
                part4.style.backgroundColor = "#000";
                part5.style.backgroundColor = "#000";
                counter++;

                if (counter >= 15) {
                    setTimeout(() => {
                        sansTiredness += 10;
                        updatePatience(sansTiredness);
                        part1.style.backgroundColor = "#000";
                        part2.style.backgroundColor = "#000";
                        part3.style.backgroundColor = "#000";
                        levelNine()
                        clearInterval(interval2);
                    }, 500)
                }
            }
        }

    }, 900);
}

function levelNine() {
    part1.style.backgroundColor = "#000";
    part2.style.backgroundColor = "#000";
    part3.style.backgroundColor = "#000";
    part4.style.backgroundColor = "#000";
    part5.style.backgroundColor = "#000";
    dialogs.innerHTML = `¡MUERE!`;
    
    counter = 0;

    let interval2 = setInterval(() => {
        if (inBattle) {
            cooldown = false;
            if (health <= 0) {
                checkHealth(health);
            }else{
                let pos = [1, 2, 3, 4, 5];
                let choosenPos = pos[getRandomInt(5)];
                let choosenPos2 = pos[getRandomInt(5)];
                let choosenPos3 = pos[getRandomInt(5)];
                console.log(choosenPos);

                if (choosenPos == 1) {
                    preAttack.play();
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";
                }else if (choosenPos == 2) {
                    preAttack.play();
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";
                }else if (choosenPos == 3) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)
                    part3.style.backgroundColor = "#000";
                }else if (choosenPos == 4) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part4.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part4.style.backgroundColor = "#fff";
                        part4.innerHTML = "ㅤ";  
                    }, 500)
                    part4.style.backgroundColor = "#000";
                }else if (choosenPos == 5) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part5.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part5.style.backgroundColor = "#fff";
                        part5.innerHTML = "ㅤ";  
                    }, 500)
                    part5.style.backgroundColor = "#000";
                }

                if (choosenPos2 == 1) {
                    preAttack.play();
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";
                }else if (choosenPos2 == 2) {
                    preAttack.play();
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";
                }else if (choosenPos2 == 3) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)
                    part3.style.backgroundColor = "#000";
                }else if (choosenPos2 == 4) {
                    preAttack.play();
                    part4.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part4.style.backgroundColor = "#fff";
                        part4.innerHTML = "ㅤ";  
                    }, 500)
                    part4.style.backgroundColor = "#000";
                }else if (choosenPos2 == 5) {
                    preAttack.play();
                    part5.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part5.style.backgroundColor = "#fff";
                        part5.innerHTML = "ㅤ";  
                    }, 500)
                    part5.style.backgroundColor = "#000";
                }

                if (choosenPos3 == 1) {
                    preAttack.play();
                    part1.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part1.style.backgroundColor = "#fff";
                        part1.innerHTML = "ㅤ";
                    }, 500)
                    part1.style.backgroundColor = "#000";
                }else if (choosenPos3 == 2) {
                    preAttack.play();
                    part2.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part2.style.backgroundColor = "#fff";
                        part2.innerHTML = "ㅤ";
                    }, 500)
                    part2.style.backgroundColor = "#000";
                }else if (choosenPos3 == 3) {
                    ultimateChoose = choosenPos
                    preAttack.play();
                    part3.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part3.style.backgroundColor = "#fff";
                        part3.innerHTML = "ㅤ";  
                    }, 500)
                    part3.style.backgroundColor = "#000";
                }else if (choosenPos3 == 4) {
                    preAttack.play();
                    part4.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part4.style.backgroundColor = "#fff";
                        part4.innerHTML = "ㅤ";  
                    }, 500)
                    part4.style.backgroundColor = "#000";
                }else if (choosenPos3 == 5) {
                    preAttack.play();
                    part5.innerHTML = "!";
                    setTimeout(() => {
                        attack.play();
                        part5.style.backgroundColor = "#fff";
                        part5.innerHTML = "ㅤ";  
                    }, 500)
                    part5.style.backgroundColor = "#000";
                }

                part1.style.backgroundColor = "#000";
                part2.style.backgroundColor = "#000";
                part3.style.backgroundColor = "#000";
                part4.style.backgroundColor = "#000";
                part5.style.backgroundColor = "#000";

                counter++

                if (counter >= 10) {
                    clearInterval(interval2)
                    let interval9 = setInterval(() => {
                        cooldown = false;
                        if (health <= 0) {
                            checkHealth(health);
                        }else{
                            let pos = [1, 2, 3, 4, 5];
                            let choosenPos = pos[getRandomInt(5)];
                            console.log(choosenPos);
                        
                            if (choosenPos == 1) {
                                preAttack.play();
                                part1.innerHTML = "!";
                                setTimeout(() => {
                                    attack.play();
                                    part1.style.backgroundColor = "#fff";
                                    part1.innerHTML = "ㅤ";
                                }, 500)
                                part1.style.backgroundColor = "#000";
                            }else if (choosenPos == 2) {
                                preAttack.play();
                                part2.innerHTML = "!";
                                setTimeout(() => {
                                    attack.play();
                                    part2.style.backgroundColor = "#fff";
                                    part2.innerHTML = "ㅤ";
                                }, 500)
                                part2.style.backgroundColor = "#000";
                            }else if (choosenPos == 3) {
                                ultimateChoose = choosenPos
                                preAttack.play();
                                part3.innerHTML = "!";
                                setTimeout(() => {
                                    attack.play();
                                    part3.style.backgroundColor = "#fff";
                                    part3.innerHTML = "ㅤ";  
                                }, 500)
                                part3.style.backgroundColor = "#000";
                            }else if (choosenPos == 4) {
                                ultimateChoose = choosenPos
                                preAttack.play();
                                part4.innerHTML = "!";
                                setTimeout(() => {
                                    attack.play();
                                    part4.style.backgroundColor = "#fff";
                                    part4.innerHTML = "ㅤ";  
                                }, 500)
                                part4.style.backgroundColor = "#000";
                            }else if (choosenPos == 5) {
                                ultimateChoose = choosenPos
                                preAttack.play();
                                part5.innerHTML = "!";
                                setTimeout(() => {
                                    attack.play();
                                    part5.style.backgroundColor = "#fff";
                                    part5.innerHTML = "ㅤ";  
                                }, 500)
                                part5.style.backgroundColor = "#000";
                            }
                        
                            part1.style.backgroundColor = "#000";
                            part2.style.backgroundColor = "#000";
                            part3.style.backgroundColor = "#000";
                            part4.style.backgroundColor = "#000";
                            part5.style.backgroundColor = "#000";
                        
                            counter++
                        
                            if (counter >= 10) {
                                setTimeout(() => {
                                    sansTiredness += 10;
                                    updatePatience(sansTiredness);
                                    part1.style.backgroundColor = "#000";
                                    part2.style.backgroundColor = "#000";
                                    part3.style.backgroundColor = "#000";
                                    part4.style.backgroundColor = "#000";
                                    part5.style.backgroundColor = "#000";
                                    levelTen();
                                    clearInterval(interval9);
                                }, 500)
                            }
                        }
                    }, 500)
                }
            }
        }

    }, 900);
}

function levelTen() {
    part1.style.backgroundColor = "#000";
    part2.style.backgroundColor = "#000";
    part3.style.backgroundColor = "#000";
    part4.style.backgroundColor = "#000";
    part5.style.backgroundColor = "#000";

    part1.style.transform = "rotate(0deg)";
    part2.style.transform = "rotate(0deg)";
    part3.style.transform = "rotate(0deg)";
    part4.style.transform = "rotate(0deg)";
    part5.style.transform = "rotate(0deg)";
    
    inBattle = false;
    inRest = true;
    let phrases3 = ["...", "¿Como sos tan fuerte?", "Estoy muy cansado...", "Asi que, voy a descansar", "No vas a ganar, yo tampoco", "Vamos a estar aca infinitamente", "Asi que...", "Saludos.", ""];
    let i = 0;

    let interval2 = setInterval(() => {
        if (i == 8) {
            megalovania.pause();
            container.innerHTML = `<img src="assets/sans-sleeping.gif" id="sans">`;
            document.getElementById("sans").style.width = "600px";
            document.getElementById("sans").style.height= "350px";
            heart.style.display = 'none';
            document.body.style.cursor = "default";
            dialogs.innerHTML = "";
            clearInterval(interval2);
        }else{
            dialogs.innerHTML = phrases3[i];
            i++;
        }
    }, 2000);

}

fight.addEventListener('click', () => {
    if (inRest) {
        attackFight.play();
        fight.style.display = 'none';
        heart.style.display = 'block';
        document.body.style.cursor = "none";
        container.innerHTML = `<img src="assets/sans-dead.png" id="sans">`;
        document.getElementById("sans").style.width = "200px";
        document.getElementById("sans").style.heigth = "150px";
        setTimeout(() => {
            container.innerHTML = `<img src="assets/sans-invisible.png" id="sans">`;
            sansDying.play();
            finalSequence();
        }, 1500)
    }
})

function finalSequence() {
    setTimeout(() => {
        bg.style.display = 'none';
        document.body.style.backgroundImage = "url('assets/999-bg.png')";
        setTimeout(() => {
            window.open("../end/youwin.html");
            window.close();
        }, 3500)
    }, 4000)
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        if (!skipped) {
            skipped = true;
            msg.innerHTML = "";
            music.pause();
            clearInterval(interval);
            levelOne();
        }
    }
});

//#endregion

//#region Start Game

alert("ATENCIÓN: Se recomienda PANTALLA COMPLETA (Presioná F11). Y podes presionar ENTER para saltar esta cinematica");

let interval = setInterval(() => {
    music.play();

    msg.innerHTML = phrases[index];
    index++;
    
    if (msg.innerHTML == "undefined") {
        msg.innerHTML = "";
        music.pause();
        levelOne();
        clearInterval(interval);
    }
}, 2000);

//#endregion