const humburger = document.querySelector('.humburger');
const overlay = document.querySelector('.overlay');
const navList = document.querySelector('#nav-list');
const navigation = document.querySelector('.navigation');
const humburgerChildtwo = document.querySelector('.humburger-child-2');
const humburgerChildOne = document.querySelector('.humburger-child-1');
const humburgerChildThree = document.querySelector('.humburger-child-3');

humburger.addEventListener('click',function(){
   
    overlay.classList.toggle("mobile-menu-overlay");
    navList.classList.toggle("nav-list");
    humburger.classList.toggle('humburger-gap-for-child');
    navigation.classList.toggle('flex-column');
    humburgerChildtwo.classList.toggle('humburger-child-2-hidden');
    humburgerChildOne.classList.toggle('rotate-45');
    humburgerChildThree.classList.toggle('rotate-minus-45');
})