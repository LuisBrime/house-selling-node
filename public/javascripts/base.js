$(document).ready(function() {
    var env = new nunjucks.Environment(new nunjucks.WebLoader('../template'));
});

$(".nav a").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});