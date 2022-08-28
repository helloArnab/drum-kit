const noOfDrmBtn = document.querySelectorAll(".drum").length
const sounds = [,"sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick.wav"]


// Detecting Button Press

for(let i=0;i<noOfDrmBtn;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        const buttonPressed = this.innerHTML
        makeSound(buttonPressed)
        buttonAnimation(buttonPressed)
        
    })
}

// Detecting Keyboard Press

document.addEventListener("keydown",function(){
    makeSound(event.key)
    buttonAnimation(event.key)
})

// Make Sound Function

function makeSound(key){

    switch (key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;

        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;

        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;

        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        case "j":
            const snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;

        case "k":
            const crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;

        case "l":
            const kick = new Audio("sounds/kick.wav")
            kick.play()
            break;
        
        default:
            console.log(buttonPressed)
            break
    }
}


function buttonAnimation(currentKey){
    const activeButton = document.querySelector("."+currentKey)

    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}