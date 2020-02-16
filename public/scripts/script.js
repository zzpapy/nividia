// $(".burger").click(function(){
//     console.log('toto')
//     $(".nav").css("display","flex");
//     $(".nav").fadeTo( "slow",1);
//     $(".burger").animate("show");
//     $(".burger").addClass("hide");
// })


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
    var el = $('.cache_p'),
    curHeight = el.height(),
    autoHeight = el.css('height', 'auto').height();
    el.height(curHeight).animate({height: autoHeight}, 1000);
    $(this).addClass('hide');
})
$(".titre_aside").click(function(){
    var el = $('.cache_a'),
    curHeight = el.height(),
    autoHeight = el.css('height', 'auto').height();
    el.height(curHeight).animate({height: autoHeight}, 1000);
    $(this).addClass('hide');
     $(this).addClass('hide');
 })
 $('.burger').click(function() {
    $('.nav').addClass('show');
    $( ".nav" ).animate({
        height: 500,
        padding:0
    }, 300,function(){
        $('.nav').css("position","sticky");
        $('.nav').css("top","1em");
    })
    $('.nav').addClass('show');
    $('.nav').removeClass('hide');
      $( ".nav a" ).animate({
        height: 'auto',
        padding:0
      }, 300)
 });
 $(".close").click(function(){
    var options = { to: { width: 0, height: "auto"} };
    console.log('tatat')
    $('.nav').removeClass('hide');
    $( ".nav" ).animate({
        height: 0,
        padding:0
      }, 300)
      $( ".nav a" ).animate({
        padding:0
      }, 300,function(){
        $(".nav").removeClass("show")
        $(".nav").addClass("hide")
      })
    $(".burger").removeClass("hide");
    $(".nav").removeAttr("style");
    $(".burger").addClass("show");
})
$(".nav a").click(function(){
    var options = { to: { width: 0, height: "auto"} };
    console.log('tatat')
    $('.nav').removeClass('hide');
    $( ".nav" ).animate({
        height: 0,
        padding:0
      }, 300)
      $( ".nav a" ).animate({
        padding:0
      }, 300,function(){
        $(".nav").removeClass("show")
        $(".nav").addClass("hide")
      })
    $(".burger").removeClass("hide");
    $(".nav").removeAttr("style");
    $(".burger").addClass("show");
})