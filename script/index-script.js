document.addEventListener('DOMContentLoaded', function () {
    const menuList = document.getElementById('product-list');
    const productList = document.querySelector('ul.product__navigation');
    const burgerMenu = document.querySelector('.burger-menu');
    const menuBody = document.querySelector('.header__navigation');

    const cardShowBtn = document.querySelector('.proposition__card-show-btn') || null;
    const hiddenCard = document.querySelectorAll('.hidden-card') || null;


    const menuShow = () => {
        menuBody.classList.toggle('header__navigation_hidden');
        burgerMenu.classList.toggle('burger-menu_checked');
        productList.classList.add('product__navigation_hidden');
    }
    if (cardShowBtn && hiddenCard) {
        cardShowBtn.addEventListener('click', () => {
            for (let i = 0; i < hiddenCard.length; i++) {
                hiddenCard[i].classList.toggle('proposition__card_hidden');
            }
            if (cardShowBtn.innerText === 'Показать ещё') {
                cardShowBtn.innerText = 'Скрыть'
            } else {
                cardShowBtn.innerText = 'Показать ещё'

            }
        })
    }

    menuList.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
            productList.classList.toggle('product__navigation_hidden')
        }
    })

    burgerMenu.addEventListener('click', menuShow);

    window.addEventListener('scroll', () => {
        burgerMenu.classList.remove('burger-menu_checked');
        menuBody.classList.add('header__navigation_hidden');
    })
})