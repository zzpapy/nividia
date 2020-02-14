$(".burger").click(function(){
    $(".nav").css("display","flex");
    $(".nav").css("flex-direction","column");
})
$(".close").click(function(){
    console.log("'toto");
    $(".nav").css("display","none");
})