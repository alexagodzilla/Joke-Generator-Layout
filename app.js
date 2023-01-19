
const jokes = require("give-me-a-joke");
var drum = document.getElementById("drum_sound");
var drumBtn = document.querySelector(".buttone") 
var result = document.querySelector(".textBox");


drumBtn.addEventListener("click", badumtish);

function badumtish(){
    // jokes.getRandomDadJoke(function (joke){
    result.innerHTML = "Ciau Pe'";
    drum.play();
    // })
}

    