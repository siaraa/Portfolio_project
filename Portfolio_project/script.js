const hamburger = document.getElementById('hamburger') ;
const links__wrapper = document.getElementById('links__wrapper') ;

hamburger.addEventListener('click', () => {
    links__wrapper.classList.toggle('show');
}); 