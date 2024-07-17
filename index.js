for (var i = 0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttoninnerhtml =  this.innerHTML;
    keypressed(buttoninnerhtml);
});
}
// document.querySelectorAll(".drum")[i].addEventListener("click", event2);

function keypressed(key){
    switch(key)
    {
        case "w":
            var playAudio = new Audio("sounds/tom-1.mp3");
            playAudio.play();
            break;
        case "a":
            var playAudio1 = new Audio("sounds/tom-2.mp3");
            playAudio1.play();
            break;
        case "s":
                var playAudio2 = new Audio("sounds/tom-3.mp3");
                playAudio2.play();
                break;
        case "d":
            var playAudio3 = new Audio("sounds/tom-4.mp3");
            playAudio3.play();
            break;
        case "j":
            var playAudio4 = new Audio("sounds/snare.mp3");
            playAudio4.play();
            break;
        case "k":
            var playAudio5 = new Audio("sounds/kick-bass.mp3");
            playAudio5.play();
            break;
        case "l":
            var playAudio6 = new Audio("sounds/crash.mp3");
            playAudio6.play();
            break;

        default:
    }
}
document.addEventListener("keydown" , function(event){
keypressed(event.key);
});