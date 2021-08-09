// Запрос на цену изделий
const buyBatton = document.querySelector(".purchase-block__btn"); // Кнопка -=Купить=-


const cross = document.getElementById("price__cross"); 
const modal = document.getElementById("price__modal");
const modalSuccess = document.getElementById("price__success");
const modalError = document.getElementById("price__error");


const modalShow = () => {
    modal.classList.remove("modal__conteiner_hidden");
    document.body.style.overflow = "hidden";
    cross.addEventListener("click", modalHidden);
};
const modalHidden = () => {
    document.querySelector(".request__form").reset();
    modal.classList.add("modal__conteiner_hidden");
    document.body.style.overflow = "auto";
    cross.removeEventListener("click", modalHidden);
};

const modalSuccessShow = () => {
        modalSuccess.classList.remove("modal__conteiner_hidden");
        document.body.style.overflow = "hidden";
        modalSuccess.querySelector(".response__button").addEventListener("click", modalResponseHidden);
        
    
};
const modalErrorShow = () => {
        modalError.classList.remove("modal__conteiner_hidden");
        document.body.style.overflow = "hidden";
        modalError.querySelector(".response__button").addEventListener("click", modalResponseHidden);
};

const modalResponseHidden = () => {
    modalSuccess.classList.add("modal__conteiner_hidden");
    modalError.classList.add("modal__conteiner_hidden");
    document.body.style.overflow = "auto";
    cross.click()
};
if (buyBatton) {
    buyBatton.addEventListener("click", () => {
        modalShow();
    });
}

// Изменение значения и ед измерения ползунков

const width = document.querySelector(".range__width"),
    height = document.querySelector(".range__height"),
    rangeUnits = document.querySelectorAll(".range__units"),
    widthRange = document.querySelector(".range__width-range"),
    heightRange = document.querySelector(".range__height-range"),
    metricSelect = document.querySelectorAll('input[name="metric"]'),
    resolutionSelect = document.querySelector("select.request__pixel"),
    resolution = { h: 320, v: 160 };
let metric = "metric-mm";
widthRange.addEventListener("input", (event) => changeRange(event));
heightRange.addEventListener("input", (event) => changeRange(event));
metricSelect.forEach((element) => {
    element.addEventListener("change", (event) =>
        changeMetric(event.target.id)
    );
});
resolutionSelect.addEventListener("change", () => changeResolution());

const changeRange = (event) => {
    if (event.target.className === "range__width-range") {
        width.innerText = widthRange.value;
    } else if (event.target.className === "range__height-range") {
        height.innerText = heightRange.value;
    }
};
const changeMetric = (newMetric) => {
    switch (metric) {
        case "metric-mm":
            if (newMetric === "metric-sm") {
                let k = 10;
                widthRange.setAttribute("step", resolution.h / k);
                widthRange.value /= 10;
                width.innerText = widthRange.value;
                widthRange.setAttribute("max", "1000");
                heightRange.setAttribute("step", resolution.v / k);
                heightRange.value /= 10;
                height.innerText = heightRange.value;
                heightRange.setAttribute("max", "1000");
                rangeUnits.forEach((item) => (item.innerText = " см"));
                metric = "metric-sm";
            } else if (newMetric === "metric-m") {
                let k = 1000;
                widthRange.setAttribute("step", resolution.h / k);
                widthRange.value /= 1000;
                width.innerText = widthRange.value;
                widthRange.setAttribute("max", "10");
                heightRange.setAttribute("step", resolution.v / k);
                heightRange.value /= 1000;
                height.innerText = heightRange.value;
                heightRange.setAttribute("max", "10");
                rangeUnits.forEach((item) => (item.innerText = " метр"));
                metric = "metric-m";
            } else if (newMetric === "resolution") {
                resetRenge(1);
            }
            break;
        case "metric-sm":
            if (newMetric === "metric-mm") {
                let k = 1;
                widthRange.setAttribute("max", "10000");
                widthRange.value *= 10;
                widthRange.setAttribute("step", resolution.h / k);
                width.innerText = widthRange.value;
                heightRange.setAttribute("max", "10000");
                heightRange.value *= 10;
                heightRange.setAttribute("step", resolution.v / k);
                height.innerText = heightRange.value;
                rangeUnits.forEach((item) => (item.innerText = " мм"));
                metric = "metric-mm";
            } else if (newMetric === "metric-m") {
                let k = 1000;
                widthRange.setAttribute("step", resolution.h / k);
                widthRange.value /= 100;
                width.innerText = widthRange.value;
                widthRange.setAttribute("max", "10");
                heightRange.setAttribute("step", resolution.v / k);
                heightRange.value /= 100;
                height.innerText = heightRange.value;
                heightRange.setAttribute("max", "10");
                rangeUnits.forEach((item) => (item.innerText = " метр"));
                metric = "metric-m";
            } else if (newMetric === "resolution") {
                resetRenge(10);
            }
            break;
        case "metric-m":
            if (newMetric === "metric-mm") {
                let k = 1;
                widthRange.setAttribute("max", "10000");
                widthRange.value *= 1000;
                widthRange.setAttribute("step", resolution.h / k);
                width.innerText = widthRange.value;
                heightRange.setAttribute("max", "10000");
                heightRange.value *= 1000;
                heightRange.setAttribute("step", resolution.v / k);
                height.innerText = heightRange.value;
                rangeUnits.forEach((item) => (item.innerText = " мм"));
                metric = "metric-mm";
            } else if (newMetric === "metric-sm") {
                let k = 100;
                widthRange.setAttribute("max", "1000");
                widthRange.value *= 100;
                widthRange.setAttribute("step", resolution.h / k);
                width.innerText = widthRange.value;
                heightRange.setAttribute("max", "1000");
                heightRange.value *= 100;
                heightRange.setAttribute("step", resolution.v / k);
                height.innerText = heightRange.value;
                rangeUnits.forEach((item) => (item.innerText = " см"));
                metric = "metric-sm";
            } else if (newMetric === "resolution") {
                resetRenge(1000);
            }
            break;
        default:
            break;
    }
};
const changeResolution = () => {
    switch (resolutionSelect.value) {
        case "р10":
            resolution.h = 320;
            resolution.v = 160;
            break;
        case "р8":
            resolution.h = 256;
            resolution.v = 128;
            break;
        case "р6":
            resolution.h = 192;
            resolution.v = 192;
            break;
        case "р5":
            resolution.h = 320;
            resolution.v = 160;
            break;
        case "р4":
            resolution.h = 256;
            resolution.v = 128;
            break;
        case "р3":
            resolution.h = 192;
            resolution.v = 192;
            break;

        default:
            break;
    }
    changeMetric("resolution");
};
const resetRenge = (kof) => {
    widthRange.setAttribute("step", resolution.h / kof);
    heightRange.setAttribute("step", resolution.v / kof);
    widthRange.value = 0;
    heightRange.value = 0;
    width.innerText = widthRange.value;
    height.innerText = heightRange.value;
};

// AJAX
const ajaxSend = async (formData) => {
    const fetchResp = await fetch("./php/form_mail-price.php", {
        method: "POST",
        body: formData,
    });
    if (!fetchResp.ok) {
        throw new Error(
            `Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`
        );
    }
    return await fetchResp.text();
};

const form = document.querySelector("form.request__form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        formData.append( "page", form.name);
        ajaxSend(formData)
            .then((response) => {
                    form.reset(); // очищаем поля формы
                    modalSuccessShow();
                })
            .catch((err) => {
                console.error(err);
                modalErrorShow();
            });
            
});

const subscrible = document.querySelector(".blog-aside__subscrible") || null;
const link = document.querySelector(".subscrible-link") || null;
const subCross = document.getElementById("subscrible-cross");
const subModal = document.getElementById("subscrible-modal");
const formSubModal = subModal.querySelector(".subscrible__form");
const feedbackForm = document.querySelector("form.feedback__form");
const success = document.getElementById("price__success");
const error = document.getElementById("price__error");

const subModalShow = () => {
    subModal.classList.remove("modal__conteiner_hidden");
    document.body.style.overflow = "hidden";
    subCross.addEventListener("click", subModalHidden);
};
const subModalHidden = () => {
    formSubModal.reset();
    subModal.classList.add("modal__conteiner_hidden");
    document.body.style.overflow = "auto";
    subCross.removeEventListener("click", subModalHidden);
};

if (subscrible) {
    subscrible.addEventListener("click", subModalShow);
}
if (link) {
    link.addEventListener("click", subModalShow);
}

const successShow = (type) => {
    success.classList.remove("modal__conteiner_hidden");
    if (type === "news") {
        success
            .querySelector("div.responce")
            .removeChild(success.querySelector("p.response__text"));
    }
    success.querySelector(".response__button").addEventListener("click", () => {
        success.classList.add("modal__conteiner_hidden");
        subModalHidden();
    });
};
const errorShow = () => {
    error.classList.remove("modal__conteiner_hidden");
    error.querySelector(".response__button").addEventListener("click", () => {
        error.classList.add("modal__conteiner_hidden");
        formSubModal.reset();
    });
};

formSubModal.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formSubModal);
    fetch("./php/form_mail-subscrible.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                successShow("news");
            } else {
                console.error("Ошибка HTTP: " + response.status);
                errorShow();
            }
        })
        .catch((err) => {
            console.error(err);
            errorShow();
        });
});
feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(feedbackForm);
    let page = feedbackForm.name;
    
    formData.append("page", page);
    fetch("./php/form_mail-callback.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                feedbackForm.reset();
                successShow("feedback");
            } else {
                console.error("Ошибка HTTP: " + response.status);
                errorShow();
            }
        })
        .catch((err) => {
            console.error(err);
            errorShow();
        });
});
