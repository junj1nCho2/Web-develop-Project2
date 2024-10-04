// document.querySelector("button").addEventListener("click", handleClick);
//클릭할 떄마다 메서드를 호출
//handleClick()으로 작성하지 않는 이유: 함수를 입력으로 넘겨 나중에 호출될 수 있도록함
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });

}