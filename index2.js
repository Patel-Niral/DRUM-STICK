let numofdrum = document.querySelectorAll(".drum").length;


document.addEventListener("keypress", function(){
    makeSound(event.key);
})
// mouse click handling
function handleclick() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
}   


    function makeSound(key) {
        switch (key) {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default: console.log(key);
        }
    }




// keyboard event handling

// document.addEventListener(keypress, makeSound(key.event))





for (let i = 0; i < numofdrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}