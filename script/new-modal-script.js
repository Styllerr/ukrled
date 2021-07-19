document.addEventListener('DOMContentLoaded', () => {
    const width = document.querySelector('.range__width'),
        height = document.querySelector('.range__height'),
        rangeUnits = document.querySelectorAll('.range__units'),
        widthRange = document.querySelector('.range__width-range'),
        heightRange = document.querySelector('.range__height-range'),
        metricSelect = document.querySelectorAll('input[name="metric"]');
    let metric = 'metric-mm';
    widthRange.addEventListener('input', (event) => changeRange(event))
    heightRange.addEventListener('input', (event) => changeRange(event))
    metricSelect.forEach(element => {
        element.addEventListener('change', (event) => changeMetric(event))
    });

    const changeRange = (event) => {
        if (event.target.className === 'range__width-range') {
            width.innerText = widthRange.value
        } else if (event.target.className === 'range__height-range') {
            height.innerText = heightRange.value
        }
    }
    const changeMetric = (event) => {
        let newMetric = event.target.id;
        switch (metric) {
            case "metric-mm":
                if (newMetric === "metric-sm") {
                    widthRange.setAttribute('step', '32');
                    widthRange.value /=  10;
                    width.innerText = widthRange.value;
                    widthRange.setAttribute('max', '1000');
                    heightRange.setAttribute('step', '16');
                    heightRange.value /=  10;
                    height.innerText = heightRange.value;
                    heightRange.setAttribute('max', '1000');
                    rangeUnits.forEach( (item) => item.innerText = ' см');
                    metric = 'metric-sm';
                } else if (newMetric === "metric-m") {
                    widthRange.setAttribute('step', '0.32');
                    widthRange.value /= 1000;
                    width.innerText = widthRange.value;
                    widthRange.setAttribute('max', '10');
                    heightRange.setAttribute('step', '0.16');
                    heightRange.value /= 1000;
                    height.innerText = heightRange.value;
                    heightRange.setAttribute('max', '10');
                    rangeUnits.forEach( (item) => item.innerText = ' метр');
                    metric = 'metric-m';
                }
                break;
            case "metric-sm":
                if (newMetric === "metric-mm") {
                    widthRange.setAttribute('max', '10000');
                    widthRange.value *= 10;
                    widthRange.setAttribute('step', '320');
                    width.innerText = widthRange.value;
                    heightRange.setAttribute('max', '10000');
                    heightRange.value *= 10;
                    heightRange.setAttribute('step', '160');
                    height.innerText = heightRange.value;
                    rangeUnits.forEach( (item) => item.innerText = ' мм');
                    metric = 'metric-mm';
                } else if (newMetric === "metric-m") {
                    widthRange.setAttribute('step', '0.32');
                    widthRange.value /= 100;
                    width.innerText = widthRange.value;
                    widthRange.setAttribute('max', '10');
                    heightRange.setAttribute('step', '0.16');
                    heightRange.value /= 100;
                    height.innerText = heightRange.value;
                    heightRange.setAttribute('max', '10');
                    rangeUnits.forEach( (item) => item.innerText = ' метр');
                    metric = 'metric-m';
                }
                break;
            case "metric-m":
                if (newMetric === "metric-mm") {
                    widthRange.setAttribute('max', '10000');
                    widthRange.value *= 1000;
                    widthRange.setAttribute('step', '320');
                    width.innerText = widthRange.value;
                    heightRange.setAttribute('max', '10000');
                    heightRange.value *= 1000;
                    heightRange.setAttribute('step', '160');
                    height.innerText = heightRange.value;
                    rangeUnits.forEach( (item) => item.innerText = ' мм');
                    metric = 'metric-mm';
                } else if (newMetric === "metric-sm") {
                    widthRange.setAttribute('max', '1000');
                    widthRange.value *= 100;
                    widthRange.setAttribute('step', '32');
                    width.innerText = widthRange.value;
                    heightRange.setAttribute('max', '1000');
                    heightRange.value *= 100;
                    heightRange.setAttribute('step', '16');
                    height.innerText = heightRange.value;
                    rangeUnits.forEach( (item) => item.innerText = ' см');
                    metric = 'metric-sm';
                }
                break;

            default:
                break;
        }

    }

})