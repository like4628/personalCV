$('document').ready(function () {


  $(window).on("scroll", function () {
    var scrollDistance = $(window).scrollTop();
    var $header = $(".jsHeader");

    if (scrollDistance > 50) {
      $header.addClass("headerTransparent");
    }
    else {
      $header.removeClass("headerTransparent")
    }
  })

  //wow js animation
  new WOW().init();





  //滾動進度條
  (function () {
    let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight; // 页面总高度
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight; // 浏览器视口高度
    let scrollAvail = pageHeight - windowHeight; // 可滚动的高度
    // console.log('可滚动的高度：', scrollAvail);
    window.onscroll = function () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  // 获取滚动条的高度
      console.log('滚动条的高度：', scrollTop);
      document.querySelector('.progress').style.width = (scrollTop / scrollAvail) * 100 + '%';    // 计算占比
    };
  }
    ());

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

  $('#btn').click(function () {
    $('html,body').animate(
      { scrollTop: $('#contact_bottom').offset().top }, 2000);
  }); //代表一個完整的執行區塊

  $('#home').click(function () {
    $('html,body').animate(
      { scrollTop: $('#topPage').offset().top }, 500);
  }); //代表一個完整的執行區塊

  $('#skill').click(function () {
    $('html,body').animate(
      { scrollTop: $('#skillPage').offset().top }, 500);
  }); //代表一個完整的執行區塊

  $('#experience').click(function () {
    $('html,body').animate(
      { scrollTop: $('#ExperiencePage').offset().top }, 500);
  }); //代表一個完整的執行區塊

  $('#myworks').click(function () {
    $('html,body').animate(
      { scrollTop: $('#WorksPage').offset().top }, 500);
  }); //代表一個完整的執行區塊

  $('#email').click(function () {
    $('html,body').animate(
      { scrollTop: $('#emailPage').offset().top }, 500);
  }); //代表一個完整的執行區塊


  //聯絡
  $('.sendBtn').click(function () {
    alert('此按鈕裝飾用，請聯絡下面信箱')
  })

})