const popup = document.querySelector('.section__form');
const buttonOpen = document.querySelector('.button__btn-js');
const buttonClose = document.querySelector('.button-close');

buttonOpen.addEventListener('click', function() {
    popup.classList.add('open');
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('open');
})

window.addEventListener('keydown', function(event) {
    if (event.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
    }
})
  