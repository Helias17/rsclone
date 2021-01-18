import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import '../../styles/nouislider_add.scss';
import saveUserInfo from './saveUserInfo';
import getAuthorizedUser from './getAuthorizedUser';

export default () => {
  const formSettingsProfile = document.getElementById('formSettingsProfile');
  const user = getAuthorizedUser();
  const distance = user.distance ? user.distance : 50;

  // init distance slider
  const sliderDistance = document.getElementById('sliderDistance');
  noUiSlider.create(sliderDistance, {
    start: [distance],
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
    saveUserInfo(formSettingsProfile);
  });

  const ageFrom = user.age_range_start ? user.age_range_start : 18;
  const ageTo = user.age_range_end ? user.age_range_end : 30;

  // init age slider
  const sliderAgeRange = document.getElementById('sliderAgeRange');
  noUiSlider.create(sliderAgeRange, {
    start: [ageFrom, ageTo],
    step: 1,
    connect: true,
    range: {
      min: 18,
      max: 99,
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
    saveUserInfo(formSettingsProfile);
  });
};
