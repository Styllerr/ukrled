const request = document.querySelector(".purchase-block__btn");
const cross = document.getElementById("price__cross");
const modal = document.getElementById("price__modal");

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
if (request) {
    request.addEventListener("click", modalShow);
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
    heightRange.setAttribute("step", resolution.v / kof) ;
    widthRange.value = 0;
    heightRange.value = 0;
    width.innerText = widthRange.value;
    height.innerText = heightRange.value;
};
