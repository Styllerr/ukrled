const request = document.querySelector('.purchase-block__btn');
const cross = document.getElementById('price__cross');
const modal = document.getElementById('price__modal');

const modalShow = () => {
    modal.classList.remove('modal__conteiner_hidden');
    document.body.style.overflow = "hidden";
    cross.addEventListener('click', modalHidden);
}
const modalHidden = () => {
    document.querySelector('.request__form').reset();
    modal.classList.add('modal__conteiner_hidden');
    document.body.style.overflow = "auto";
    cross.removeEventListener('click', modalHidden);
}

request.addEventListener('click', modalShow);
