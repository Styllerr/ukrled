document.addEventListener('DOMContentLoaded', () => {
    const requestPrice = document.querySelector('.modal__request-price');
    requestPrice.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Нажали!');
    })
})