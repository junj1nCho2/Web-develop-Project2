// $("h1").text("Bbbbbbbbbbbbbbbbye"); //$ = document.querySelectAll 대체

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");

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

$("h1").on("click", function(){
    $("h1").css("color", "purple"); 
}); 