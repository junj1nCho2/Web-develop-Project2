// $("h1").text("Bbbbbbbbbbbbbbbbye"); //$ = document.querySelectAll 대체

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");
// .attr()는 HTML 요소가 가지고 있는 정보(속성)를 읽거나, 새로운 정보를 넣는 도구

// $("h1").click(function () {
//     $("h1").css("color", "purple")
// });

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// $("button").click(function () {
//     $("h1").css("color", "purple");
// });

// $(document).keydown(function (event){
//     $("h1").text(event.key);
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5}); //hide(): 선택 요소를 숨기는 애니메이션  
});                    //fadeIn(): 불투명도 낮춰서 숨기기
                       //slideUp(), sildeDown  슬라이드 위/아래로
//animate() 중괄호 사이에 숫자 값이 있는 css규칙만 추가할 수 있음
                       


                       