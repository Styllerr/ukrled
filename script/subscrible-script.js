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
    fetch("./php/form_mail-sub.php", {
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
    fetch("./php/form_mail-feedback.php", {
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
