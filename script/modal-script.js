document.addEventListener('DOMContentLoaded', () => {
    const requestPrice = document.querySelector('.modal__request-price');
    const submitBlock = document.querySelector('.submit-block');
    const modalSubmit = document.querySelector('.modal__submit');
    const checkboxes = document.querySelectorAll('.check-wrapper > input');

    requestPrice.addEventListener('click', (event) => {
        event.preventDefault();
        submitBlock.classList.remove('modal-hidden');
        modalSubmit.classList.remove('modal-hidden');
        requestPrice.classList.add('modal-hidden');
        checkboxes.forEach(item => {
            item.classList.add('check-disabled');
            item.disabled= 'true'
        })
        console.log('Нажали!', checkboxes);
    })
})