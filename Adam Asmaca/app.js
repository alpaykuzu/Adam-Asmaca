const wordElement = document.getElementById("kelime");
const form1 = document.forms[0];
const lettersElement = document.getElementById("harfler");
const form2 = document.forms[1];
const area2Element = document.getElementById("bölüm2");
const adam = document.getElementsByClassName("adam");

window.addEventListener("DOMContentLoaded", pageLoaded);
form1.addEventListener("submit", gameStart);
form2.addEventListener("submit", guessLetter);

let wrongGuess = 0;

function pageLoaded() {
    for (let i = 0; i < adam.length; i++) {
        adam[i].style.display = "none";
    }
}
function gameStart(e) {
    const word = String(wordElement.value).toUpperCase().trim();
    if (word != "") {
        for (let i = 0; i < word.length; i++) {
            const letter = document.createElement("div");
            letter.className = "harf";
            if (word[i] == " ") {
                letter.innerHTML = "/";
                letter.style.backgroundColor = "black";
                letter.style.color = "white";
            } else {
                letter.innerHTML = "_";
            }
            letter.value = word[i];
            lettersElement.appendChild(letter);
        }
        form2.innerHTML = "Harf Giriniz :";
        const letterInputElement = document.createElement("input");
        letterInputElement.type = "text";
        letterInputElement.id = "harfinput";
        letterInputElement.maxLength = "1";
        letterInputElement.style.textTransform = "capitalize";
        form2.appendChild(letterInputElement);
    }
    e.preventDefault();
}
function guessLetter(e) {
    const letterInputElement = document.getElementById("harfinput");
    const letter = letterInputElement.value.toUpperCase().trim();
    const letters = document.getElementsByClassName("harf");
    let check = 0;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].value == letter) {
            letters[i].innerHTML = letter;
        }
        if (letters[i].innerHTML == "_") {
            check++;
        }
    }
    if(check==0){
        alert("WIN");
    }
    if (wordElement.value.toUpperCase().trim().includes(letter) == false) {
        hook();
    }
    e.preventDefault();
}
function hook() {
    adam[wrongGuess].style.display = "inline";
    if (wrongGuess == 8) {
        alert("GAME OVER");
    } 
    wrongGuess++;
}