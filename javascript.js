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

$(document).on('click', 'a', function(event) {
            event.preventDefault();
            $('body, html').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        });