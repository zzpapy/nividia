$(".burger").click(function(){
    console.log('toto')
    $(".nav").css("display","flex");
    $(".nav").fadeTo( "slow",1);
    $(".burger").removeClass("show");
    $(".burger").addClass("hide");
})
$(".close").click(function(){
    $(".nav").css("display","none");
    
    $(".burger").removeClass("hide");
    $(".burger").addClass("show");
})
$(".nav a").click(function(){
    $(".nav").css("display","none");
    $(".burger").removeClass("hide");
    $(".burger").addClass("show");
})
$(".affich_section").click(function(){
    $(this).find("div").addClass("show");
    $('.footer').find("i").addClass("show");
    var $target = $('html,body'); 
$target.animate({scrollTop: $target.height()}, 1000);
    $(this).find("i").removeClass("show");
    $(this).find("i").addClass("hide");
    var close=$(this).attr('title');
    var close1=$(this).attr('name');
    console.log(close,close1)
    $('.'+close).removeClass('show');
    $('.'+close).addClass('hide');
    $('.'+close1).removeClass('show');
    $('.'+close1).addClass('hide');
})
var windowHeight= $(window).height();
console.log(windowHeight);
	if(windowHeight >=768){
        $('.nav').removeClass('hide');
        $('.nav').addClass('show');
	}