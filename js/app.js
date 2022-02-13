const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    this.classList.toggle('is-active');

    menu.addEventListener('click', function(){
        menu.classList.remove('is-active');
        hamburger.classList.remove('is-active');
    
    });
});
