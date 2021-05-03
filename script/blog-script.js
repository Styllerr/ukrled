const body = document.querySelector('.blog-body');
const subscrible = document.querySelector('.blog-aside__subscrible');
const cross = document.querySelector('.modal__cross');
const modal = document.querySelector('.subscrible__conteiner');

const modalShow = () => {
    modal.classList.remove('subscrible__conteiner_hidden');
    body.style.overflow = "hidden";
    cross.addEventListener('click', modalHidden);
}
const modalHidden = () => {
    document.querySelector('.subscrible__form').reset();
    modal.classList.add('subscrible__conteiner_hidden');
    body.style.overflow = "auto";
    cross.removeEventListener('click', modalHidden);
}

subscrible.addEventListener('click', modalShow);
