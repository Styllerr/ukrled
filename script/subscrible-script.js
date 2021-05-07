const subscrible = document.querySelector('.blog-aside__subscrible') || null;
const link = document.querySelector('.subscrible-link') || null;
const subCross = document.getElementById('subscrible-cross');
const subModal = document.getElementById('subscrible-modal');

const subModalShow = () => {
    subModal.classList.remove('modal__conteiner_hidden');
    document.body.style.overflow = "hidden";
    subCross.addEventListener('click', subModalHidden);
}
const subModalHidden = () => {
    document.querySelector('.subscrible__form').reset();
    subModal.classList.add('modal__conteiner_hidden');
    document.body.style.overflow = "auto";
    subCross.removeEventListener('click', subModalHidden);
}

if (subscrible) {
    subscrible.addEventListener('click', subModalShow);
}
if (link) {
    link.addEventListener('click', subModalShow);
}
