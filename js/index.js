// Jquery

// $(".test").hide(3000)


$("window").on("scroll" , function(){
   let x = $(window).scrollTop()
   
   if(x > 300){
    $(".navbar").css({backgroundColor : "tomato"})
   }
    
})