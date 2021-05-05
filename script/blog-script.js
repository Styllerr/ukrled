const subscrible = document.querySelector('.blog-aside__subscrible') || null;
const link = document.querySelector('.subscrible-link') || null;
const cross = document.querySelector('.modal__cross');
const modal = document.querySelector('.modal__conteiner');

const modalShow = () => {
    modal.classList.remove('modal__conteiner_hidden');
    document.body.style.overflow = "hidden";
    cross.addEventListener('click', modalHidden);
}
const modalHidden = () => {
    document.querySelector('.subscrible__form').reset();
    modal.classList.add('modal__conteiner_hidden');
    document.body.style.overflow = "auto";
    cross.removeEventListener('click', modalHidden);
}

if (subscrible) {
    subscrible.addEventListener('click', modalShow);
}
if (link) {
    link.addEventListener('click', modalShow);
}
