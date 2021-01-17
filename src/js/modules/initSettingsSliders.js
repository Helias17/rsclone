import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import '../../styles/nouislider_add.scss';

export default () => {
  // init distance slider
  const sliderDistance = document.getElementById('sliderDistance');
  noUiSlider.create(sliderDistance, {
    start: [50],
    step: 1,
    range: {
      min: [1],
      max: [300],
    },
    format: {
      to: (value) => parseInt(value, 10),
      from: (value) => value,
    },

  });

  // show range value in input
  const sliderDistanceValueEl = document.getElementById('sliderDistanceValue');

  sliderDistance.noUiSlider.on('update', (values, handle) => {
    sliderDistanceValueEl.value = values[handle];
  });
  // callback after new distance set
  sliderDistance.noUiSlider.on('end', () => {
    alert(sliderDistanceValueEl.value);
  });

  // init age slider
  const sliderAgeRange = document.getElementById('sliderAgeRange');
  noUiSlider.create(sliderAgeRange, {
    start: [18, 60],
    step: 1,
    connect: true,
    range: {
      min: 18,
      max: 100,
    },
    format: {
      to: (value) => parseInt(value, 10),
      from: (value) => value,
    },

  });

  // show age range value in inputs
  const ageRangeFromEl = document.getElementById('ageRangeFrom');
  const ageRangeToEl = document.getElementById('ageRangeTo');

  sliderAgeRange.noUiSlider.on('update', (values, handle) => {
    if (handle) {
      ageRangeToEl.value = values[handle];
    } else {
      ageRangeFromEl.value = values[handle];
    }
  });

  // callback after new distance set
  sliderAgeRange.noUiSlider.on('end', () => {
    alert(`${ageRangeFromEl.value} ${ageRangeToEl.value}`);
  });
};
