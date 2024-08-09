$(document).ready(function () {
  let header = $('#header');
  let headerHeight = header.outerHeight(); // 네비게이션의 높이

  // 부드러운 스크롤
  $('#header a').on('click', function(event) {
    if (this.hash !== "") {         // 해시 값이 빈 문자열이 아닌 경우
      event.preventDefault();       // 링크 클릭 시 페이지가 즉시 이동하는 기본 동작을 막음.
      var hash = this.hash;
      // var totalPos = headerHeight
      var targetOffset = $(hash).offset().top - headerHeight;

      $('html, body').animate({     // html과 body 요소를 애니메이션 설정
        scrollTop: targetOffset
      }, 800);
    }
  });

  // Mobile Menu
  let mobileMenu = $('#header .gnb');

  // Mobile Navigation Toggle
  mobileMenu.mouseleave(function (){
    $(this).removeClass('show');
  });            

});