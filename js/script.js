const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', function(){
   menu.classList.toggle('active');
   burger.classList.toggle('open');
})