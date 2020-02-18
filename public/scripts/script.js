var windowWidth= $(window).width();
console.log(windowWidth <=768)
console.log(windowWidth);
if(windowWidth >=768){
    console.log('tatat')
    $('.nav').removeClass('hide');
    $('.nav').addClass('show');    
    $('.container_footer').removeClass('hide');
    $('.container_footer').addClass('show');
}
if(windowWidth <768){
    $('.container_footer').removeClass('show');
    $('.container_footer').addClass('hide');
    console.log('toto')
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
    $(".close").click(function(){
        var options = { to: { width: 0, height: "auto"} };
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
 $(".css div").hover(function(){
     var color=$(this).attr('class');
     console.log(color)
      document.documentElement.style.setProperty('--color_principale', color);
  })
  $(".font div").hover(function(){
    var font=$(this).attr('class');
    $(this).css("box-shadow","0 0 0");
     document.documentElement.style.setProperty('--doc_font', font);
     $(".font div").mouseleave(function(){
        $(this).css("box-shadow","1px 1px 7px");
     })
 })
  $(".display_css").click(function(){
      $(".cont_css").css("display","flex");
 })
 $(".css div").click(function(){
    $(".cont_css").css("display","none");
})

$(document).ready( function() {

    $('.demo').each( function() {
      $(this).minicolors({
        control: $(this).attr('data-control') || 'hue',
        defaultValue: $(this).attr('data-defaultValue') || '',
        format: $(this).attr('data-format') || 'rgb',
        keywords: $(this).attr('data-keywords') || '',
        inline: $(this).attr('data-inline') === 'true',
        letterCase: $(this).attr('data-letterCase') || 'lowercase',
        opacity: $(this).attr('data-opacity')==='true',
        position: $(this).attr('data-position') || 'bottom',
        swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
        change: function(value, opacity) {
          if( !value ) return;
          if( opacity ) value ;
          var a = value.indexOf(")");
          var b = " ,0.5";
          var position = a;
          var output = [value.slice(0, position), b, value.slice(position)].join('');
          console.log(output);
          if( typeof console === 'object' ) {
            document.documentElement.style.setProperty('--color_principale', output);
          }
        }
      });
    });
  });
  $( ".cont_css" ).mouseleave(function() {
    $(".cont_css").css("display","none");
  });
 