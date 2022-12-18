let ataquePlayer;
let ataqueEnemy;
let ganadas = 0;
let perdidas = 0;
let vidasPlayer = 3;
let vidasEnemy = 3;

const starter = document.getElementById("starter");
const combat = document.getElementById("combat");
const starterScreen = document.getElementById("starter-screen");
const combatScreen = document.getElementById("combat-screen");
const cartas = document.getElementById("cartas");
const messageResult = document.getElementById("result");

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
const choseButton = document.getElementById("chose-attack");

const inputStone = document.getElementById("piedra");
const inputPaper = document.getElementById("papel");
const inputScissor = document.getElementById("tijera");

const messageCombat = document.getElementById("mensaje-combate");
const messageNewAttackPlayer = document.getElementById("ataque-nuevo-jugador");
const messageNewAttackEnemy = document.getElementById("ataque-nuevo-enemigo");

const spanHealthPlayer = document.getElementById("your-health");
const spanEnemyHealth = document.getElementById("enemy-health");
const spanWins = document.getElementById("win");
const spanLoses = document.getElementById("lose");

function startGame(){
    playButton.addEventListener("click", playEvent);
    resetButton.addEventListener("click", resetEvent);
    choseButton.addEventListener("click", choseEvent);
    resetButton.disabled = true;

    inputStone.disabled = true;
    inputPaper.disabled = true;
    inputScissor.disabled = true;
    choseButton.disabled = true;
}

function playEvent(){
    spanHealthPlayer.innerHTML = vidasPlayer;
    spanEnemyHealth.innerHTML = vidasEnemy;
    spanWins.innerHTML = ganadas;
    spanLoses.innerHTML = perdidas;

    inputStone.disabled = false;
    inputPaper.disabled = false;
    inputScissor.disabled = false;
    choseButton.disabled = false;
}

function resetEvent(){
    location.reload();
}

function choseEvent(){
    if (inputStone.checked){
        ataquePlayer = "PIEDRA";
    } else if (inputPaper.checked){
        ataquePlayer = "PAPEL";
    } else if (inputScissor.checked){
        ataquePlayer = "TIJERA";
    } else {
        alert("Selecciona un ataque por favor!");
        resetEvent();
    }

    messageNewAttackPlayer.innerHTML = ataquePlayer;
    attackEnemyEvent();
}

function attackEnemyEvent(){
    let num = randomNumber(1,3)

    if (num == 1){
        ataqueEnemy = "PIEDRA";
    } else if (num == 2){
        ataqueEnemy = "PAPEL";
    } else {
        ataqueEnemy = "TIJERA";
    }

    messageNewAttackEnemy.innerHTML = ataqueEnemy;
    combatFinalEvent();
}

function combatFinalEvent(){
    if (ataquePlayer == ataqueEnemy){
        messageCombat.innerHTML = "Empataste :o";
    } else if (ataquePlayer == "PIEDRA" && ataqueEnemy == "TIJERA"){
        messageCombat.innerHTML = "GANASTE! :D";
        vidasEnemy -= 1;
    } else if (ataquePlayer == "PAPEL" && ataqueEnemy == "PIEDRA"){
        messageCombat.innerHTML = "GANASTE! :)";
        vidasEnemy -= 1;
    } else if (ataquePlayer == "TIJERA" && ataquePlayer == "PAPEL"){
        messageCombat.innerHTML = "GANASTE! :3";
    } else {
        messageCombat.innerHTML = "PERDISTE! D:";
        vidasPlayer -= 1;
    }

    checkLiveEvent();
    spanHealthPlayer.innerHTML = vidasPlayer;
    spanEnemyHealth.innerHTML = vidasEnemy;
}

function checkLiveEvent(){
    if (vidasEnemy == 0){
        messageCombat.innerHTML = "GANASTE LA PARTIDA CAMPEÓN! >:D";
    } else if (vidasPlayer == 0){
        messageCombat.innerHTML = "PERDISTE LA PARTIDA! D:";
    }

    if (vidasPlayer == 0 || vidasEnemy == 0){
        inputStone.disabled = true;
        inputPaper.disabled = true;
        inputScissor.disabled = true;
        choseButton.disabled = true;
        resetButton.disabled = false;
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", startGame);