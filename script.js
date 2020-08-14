$('document').ready(function(){


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

  //Aos js animation
  AOS.init({
  duration: 1000,
  })


  //fancyBox 3.0 如果是3.1以上的版本不能使用position:relative 
  //要去修改裡面為position:fixed
  $("[data-fancybox]").fancybox({
      loop: true
  });

  //scrolltop網頁緩慢滑動

  $('#btn').click(function(){
    $('html,body').animate(
      {scrollTop:$('#contact_bottom').offset().top}, 2000);
  }); //代表一個完整的執行區塊

  $('#home').click(function(){
    $('html,body').animate(
      {scrollTop:$('#topPage').offset().top}, 500);
  }); //代表一個完整的執行區塊

  $('#skill').click(function(){
    $('html,body').animate(
      {scrollTop:$('#skillPage').offset().top}, 500);
  }); //代表一個完整的執行區塊

  $('#experience').click(function(){
    $('html,body').animate(
      {scrollTop:$('#ExperiencePage').offset().top}, 500);
  }); //代表一個完整的執行區塊

  $('#myworks').click(function(){
    $('html,body').animate(
      {scrollTop:$('#WorksPage').offset().top}, 500);
  }); //代表一個完整的執行區塊

  $('#email').click(function(){
    $('html,body').animate(
      {scrollTop:$('#emailPage').offset().top}, 500);
  }); //代表一個完整的執行區塊


  //聯絡
  $('.sendBtn').click(function(){
    alert('此按鈕裝飾用，請聯絡下面信箱')
  })

})