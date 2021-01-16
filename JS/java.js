
$(window).on("load",function(){
    $(".loader").fadeOut(1000);
    $(".content").fadeIn(1000);   
})

var visibility=true;

$(".loading").click(function(){
    if(visibility){
        $(".allpattern").animate({
            left:"+=150",
            
            

        })
        visibility=false;
 }
  else{
   $(".allpattern").animate({
    left:"-=150",
    
   })
   visibility=true;
   }
})

const oo= document.querySelector(".orange");
console.log(oo);

function handling(){
    document.documentElement.style.setProperty(`--${this.dataset.name}`, `${this.dataset.value}`);
    console.log("bblabla")
}


const colorpalette = document.querySelectorAll('.coloring');
colorpalette.forEach(color =>
    color.addEventListener('click',handling));





    new TypeIt("#h1", {
        speed: 80,
        waitUntilVisible: true,
        cursor:false,
        loop: true
      })
        .type("YOUSSIF ELMOGY",{delay:700})
        .delete()
        .type("DEVELOPER",{delay:700})
        .delete()
        .type("FROM EGYPT",{delay:700})
      
      .go();

      $(".replace").on("click",function(){
        $( ".changing " ).show();
      
      $(".ch").replaceWith($(".changing"));
      $(".ch2").css("display","none");

 
      });

      $(".home").on("click",function(){
        $( ".chh " ).show();
      
     
 
      });
    
    