$(".spooderman").click(function(){
    $(".spiderman").fadeToggle();
});
$(".Thanos").click(function(){
    $(".thanos1").fadeToggle();
});

$(".thanos2").hide();

$(".thanos1").click(function() {
    $(".thanos2").fadeIn(); 
});

$(".thanos2").click(function() {
    $(".thanos1").fadeOut(); 
});

