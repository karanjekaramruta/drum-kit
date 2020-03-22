var buttonElementsCount = document.querySelectorAll('.drum').length; //select all button elements with class='drum'

//loop through all buttons and add a event listener
for (var i = 0; i <buttonElementsCount; i++) {

  var buttonElements = document.querySelectorAll('.drum');

  buttonElements[i].addEventListener("click", function() {
      var buttonInnerHtml = this.innerHTML;
      playLetterSpecificSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);
  });
}

function playLetterSpecificSound(buttonInnerHtml){

  switch (buttonInnerHtml) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    default:
  }
}

document.addEventListener("keydown", function(event){
    playLetterSpecificSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add('pressed');

   setTimeout(function() {
      activeButton.classList.remove("pressed");
   }, 100);
}
