$(".burger").click(function(){
    $(".nav").css("display","flex");
    $(".nav").css("position","sticky");
    $(".nav").css("top","0");
    $(".nav").fadeTo( "slow" , 0.5);
    $(".nav").css("flex-direction","column");
    $(".burger").css("display","none");
})
$(".close").click(function(){
    console.log("'toto");
    $(".nav").css("display","none");
    $(".burger").css("display","block");
})
$(".nav a").click(function(){
    console.log("'toto");
    $(".nav").css("display","none");
    $(".burger").css("display","block");
})