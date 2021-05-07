document.addEventListener('DOMContentLoaded', (e) => {
    let count = 0;
    const slides = document.querySelectorAll(".media__slide");

    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    prevBtn.disabled = true;

    const next = () => {
        if (count < slides.length - 1) {
            slides[count].classList.remove('media__slide_show')
            slides[count + 1].classList.add('media__slide_show')
            ++count;
            prevBtn.disabled = false;
            prevBtn.classList.remove('media__arrow-prev_thin');
            prevBtn.classList.add('media__arrow-prev_thick');
            if (count === slides.length - 1) {
                nextBtn.disabled = true;
                nextBtn.classList.remove('media__arrow-next_thick');
                nextBtn.classList.add('media__arrow-next_thin');
            }
        }
    }
    const prev = () => {
        if (count) {
            slides[count].classList.remove('media__slide_show')
            slides[count - 1].classList.add('media__slide_show')
            --count;
            nextBtn.disabled = false;
            nextBtn.classList.remove('media__arrow-next_thin');
            nextBtn.classList.add('media__arrow-next_thick');
            if (count === 0) {
                prevBtn.disabled = true;
                prevBtn.classList.remove('media__arrow-prev_thick');
                prevBtn.classList.add('media__arrow-prev_thin');
            }
        }
    }

    nextBtn.addEventListener('click', next)
    prevBtn.addEventListener('click', prev)



})

