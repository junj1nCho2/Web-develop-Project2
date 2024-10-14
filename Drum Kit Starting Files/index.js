// document.querySelector("button").addEventListener("click", handleClick);
//클릭할 떄마다 메서드를 호출
//handleClick()으로 작성하지 않는 이유: 함수를 입력으로 넘겨 나중에 호출될 수 있도록함
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// 버튼 누른 곳을 찾음
for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // 드럼 클래스와 관련된 모든 요소 확보
        // 반복문 돌면서 0에서 시작해 이벤트 리스너를 추가 
        // 버튼의 이벤트 리스너가 그 이벤트 리스너에 연결된 기능을 발생시킴
        
        // this.style.color = "white"; 
        // console.log(this.style.color = "white");
        // 이미지의 텍스트 흰색으로 바꿈
        var buttonInnerHTML = this.innerHTML // 이벤트를 촉발할 버튼

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });

}

// 키보드 누른 곳을 찾음
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}); 
// 웹페이지 전체에 이벤트 리스너 추가(키보드)

function makeSound(key) {

    switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
            default: console.log(buttonInnerHTML);
            

        }


}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey); 
    activeButton.classList.add("pressed"); 

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

