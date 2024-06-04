const numofdrum = document.querySelectorAll(".drum").length;
alert(numofdrum + " drums are present");

function handleclick() {
    const drumele = this.innerHTML;

    if (drumele === "w") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    } else if (drumele === "a") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    } else if (drumele === "s") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    } else if (drumele === "d") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    } else if (drumele === "j") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    } else if (drumele === "k") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    } else if (drumele === "l") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
}

for (let i = 0; i < numofdrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}
