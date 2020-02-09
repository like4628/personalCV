$(window).on("scroll",function(){
  var scrollDistance = $(window).scrollTop();
  var $header = $(".jsHeader");
  
  if (scrollDistance > 50 ){
    $header.addClass("headerTransparent");
  }
  else{
    $header.removeClass("headerTransparent")
  }
})

//wow js animation
new WOW().init();

//fancyBox 3.0 如果是3.1以上的版本不能使用position:relative 
//要去修改裡面為position:fixed
$("[data-fancybox]").fancybox({
    loop: true
});