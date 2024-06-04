// document.querySelector("button").addEventListener("click", handleclick);

// function handleclick(){
//     alert("clicked");
// }

let audio1 = new Audio("sounds/crash.mp3");
let audio2 = new Audio("sounds/kick-bass.mp3");
let audio3 = new Audio("sounds/snare.mp3");
let audio4 = new Audio("sounds/tom-1.mp3");
let audio5 = new Audio("sounds/tom-2.mp3");
let audio6 = new Audio("sounds/tom-3.mp3");
let audio7 = new Audio("sounds/tom-4.mp3");




let numofdrum = document.querySelectorAll(".drum").length ; 

// alert(numofdrum + " drum are present");
function handleclick(){

    // audio 
    var audio = new Audio("sounds/snare.mp3");
    audio1.play();

on
    // onclick()

//    alert("clicked");
}


for(let i = 0 ; i < numofdrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener( "click", handleclick);
}

