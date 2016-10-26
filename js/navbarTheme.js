function navbarMobileInit(){
 console.log("Navbar Scripts");
 if ($(".mainMenu").length > 0)
 {
   console.log("Mobile View Navbar")
   $(".menuToggle").on('click', function() {
     $(".mainMenu > ul").slideToggle('slow');
     console.log("I reach active part");
     console.log(this);
     $(this).toggleClass('active');
   });
   $(".mainMenu > ul li").has("ul.subMenu").prepend('<span class="subMenuKey"></span>');

   $(".mainMenu").on('click', '.subMenuKey', function() {
    console.log("Menu has been closed");
    console.log(this);
    $(this).toggleClass('mOpened');
    $(this).closest('li').children('ul.subMenu').slideToggle();
  });
 }
}

function closeNavbar(){
  $(".mainMenu > ul").slideToggle('slow');
  $('.menuToggle').toggleClass('active');
}