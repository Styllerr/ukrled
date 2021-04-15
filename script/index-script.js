document.addEventListener('DOMContentLoaded', function () {
    const cardShowBtn = document.querySelector('.proposition__card-show-btn');
    const hiddenCard = document.querySelectorAll('.hidden-card')
    cardShowBtn.addEventListener('click', () => {
        for (let i = 0; i < hiddenCard.length; i++) {
            hiddenCard[i].classList.toggle('proposition__card_hidden');
        }
        if(cardShowBtn.innerText === 'Показать ещё') {
            cardShowBtn.innerText = 'Скрыть'
        }else {
            cardShowBtn.innerText = 'Показать ещё'
            
        } 
    })
})