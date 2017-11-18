//var arrow = document.getElementById("arrow");
//arrow.addEventListener("click", function() {
//   
//})

//var $arrow = $("#arrow");

//var $off = $("main").offset().top;

$("#arrow").on("click", function() {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1000)
})

