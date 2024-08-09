// Import all of Bootstrap's JS
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

// 컴포넌트 호출
import Dropdown from 'bootstrap/js/dist/dropdown';
import Tooltip from 'bootstrap/js/dist/tooltip';
import Modal from 'bootstrap/js/dist/modal';
import Collapse from 'bootstrap/js/dist/collapse';


/*  ::::::::::::::::::::  Bootstrap Component JS  ::::::::::::::::::::  */
// 1) Tooltop - 부트스트랩 3을 사용하는 경우에는 Popper.js가 포함되어 있어서 별도 설치할 필요가 없습니다. 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

// 2) Modal
new Modal(document.querySelector('#popup'), {
  backdrop: true // 배경 클릭 시 모달 닫힘 여부 처리 
});

// 3) Dropdown
const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
[...dropdownElementList].forEach(dropdownToggleEl => new Dropdown(dropdownToggleEl));

// 4) 캐러셀 기능 호출
import Carousel from 'bootstrap/js/dist/carousel';
new Carousel(document.querySelector('#hero-carousel'), {
  interval: 2000
});

// 5) 네비게이션 기능 호출
// 모바일 메뉴 토글 버튼과 메뉴 요소를 선택
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-collapse');

// Collapse 인스턴스 생성
const bsCollapse = new Collapse(navbarMenu, {
  toggle: false
});

navbarToggle.addEventListener('click', () => {
  bsCollapse.toggle();
});


// 스크롤스파이 기능 초기화
// const scrollSpy = new ScrollSpy(document.body, {
//   target: '#header'
// });

   