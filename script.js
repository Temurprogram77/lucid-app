let modal_home = document.querySelector('.modal-home');
let logo_box = document.querySelector('.logo-box');
let up = document.querySelector('.up');

logo_box.addEventListener('click', ()=>{
    modal_home.classList.toggle('block')
    up.classList.toggle('rotate')
})