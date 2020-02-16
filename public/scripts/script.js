// $(".burger").click(function(){
//     console.log('toto')
//     $(".nav").css("display","flex");
//     $(".nav").fadeTo( "slow",1);
//     $(".burger").animate("show");
//     $(".burger").addClass("hide");
// })

$(".nav a").click(function(){
    $(".nav").css("display","none");    
    $(".nav").removeAttr("style");
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
    
    $('.'+close).removeClass('show');
    $('.'+close).addClass('hide');
    $('.'+close1).removeClass('show');
    $('.'+close1).addClass('hide');
})
var windowHeight= $(window).height();
console.log(windowHeight);
if(windowHeight >768){
    $('.nav').removeClass('hide');
    $('.nav').addClass('show');
    $('.container_footer').removeClass('hide');
    $('.container_footer').addClass('show');        
}

$(".affich_txt").click(function(){
    $(".cache_p").css("height","auto");

    $(this).addClass('hide');
})
$(".titre_aside").click(function(){
     $(".cache_a").css("height","auto");
     $(this).addClass('hide');
 })
 $('.burger').click(function() {
     var options = { to: { width: 280, height: 1000} };
     $( ".nav" ).show( "blind", options, 500, function() {
         $(this).css("position","sticky");
         $(this).css("top","1vh");
         $(this).css("display","flex");
         $(this).css("align-items","center");
         $(this).css("flex-direction","coloumn");
        });
 });
 $(".close").click(function(){
    $(".nav").css("display","none");
    
    $(".burger").removeClass("hide");
    $(".nav").removeAttr("style");
    $(".burger").addClass("show");
})