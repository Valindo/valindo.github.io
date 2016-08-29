$(function(){
  if($(".searchOpen").length > 0)
  {
    var searchStatus = true;
    $(".searchOpen").on('click', function(e){
     e.preventDefault();
     if(searchStatus)
     {
       $(".headSearch").animate({'width': '250px'}, 'slow');
       $(this).addClass('active');
       searchStatus = false;
     }
     else
     {
       $(".headSearch").animate({'width': '0px'}, 'slow');
       $(this).removeClass('active');
       searchStatus = true;
     }
   });
  }
});