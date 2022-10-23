
// querySelector() Функция, которая ищет элементы на странице.
// addEventListener() Функция, которая слушает ваши действия над элементом.
// classList Объект, внутри которого есть функции управляющие классами.
// add()  является функцией добавляющей доп. класс.
// Добавляет класс: searchElem.classList.add();
// Удаляет класс: searchElem.classList.remove();
// Если нет класса, добавляет, если есть, удаляет: searchElem.classList.toggle();
// Сообщает, есть ли класс у элемента: searchElem.classList.contains();

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

// фокус
