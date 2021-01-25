import saveUserInfo from './saveUserInfo';
import copySelectedPassionsToInput from './copySelectedPassionsToInput';

export default () => {
  const btnSaveEditProfile = document.getElementById('btnSaveEditProfile');
  const formEditUserCard = document.getElementById('formEditUserCard');
  const profileUserCard = document.getElementById('profileUserCard');
  const genderProfileUserCard = profileUserCard.querySelector('.usercard__gender');

  btnSaveEditProfile.addEventListener('click', () => {
    const curGenderProfileUserCard = profileUserCard.querySelector('.js-genderEditCard input[type="radio"]:checked');

    if (curGenderProfileUserCard.value === '0') {
      genderProfileUserCard.classList.add('usercard__gender_man');
      genderProfileUserCard.textContent = 'Man';
    } else if (curGenderProfileUserCard.value === '1') {
      genderProfileUserCard.classList.add('usercard__gender_woman');
      genderProfileUserCard.textContent = 'Woman';
    } else if (curGenderProfileUserCard.value === '2') {
      genderProfileUserCard.classList.add('usercard__gender_trans');
      genderProfileUserCard.textContent = 'Trans';
    }

    const cityEl = profileUserCard.querySelector('.usercard__city');
    const cityProfileUserCard = profileUserCard.querySelector('.usercard__city-name');
    const locationEditCard = document.getElementById('locationEditCard');

    if (locationEditCard.value) {
      cityProfileUserCard.textContent = locationEditCard.value;
      cityEl.classList.remove('usercard__city_hidden');
    } else {
      cityEl.classList.add('usercard__city_hidden');
    }

    const passionsContainer = profileUserCard.querySelector('.usercard__hobby-list');
    passionsContainer.innerHTML = '';
    const selectedPassions = document.querySelectorAll('.editcard__passion_active');
    selectedPassions.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('usercard__hobby-item');
      li.textContent = item.textContent;
      passionsContainer.append(li);
    });

    const aboutProfileUserCard = profileUserCard.querySelector('.usercard__info-about');
    const aboutEditCard = document.querySelector('.editcard__about-textarea');
    if (aboutEditCard.value) {
      aboutProfileUserCard.textContent = aboutEditCard.value;
      aboutProfileUserCard.classList.remove('usercard__info-about_hidden');
    } else {
      aboutProfileUserCard.textContent = '';
      aboutProfileUserCard.classList.add('usercard__info-about_hidden');
    }

    copySelectedPassionsToInput();

    saveUserInfo(formEditUserCard);
  });
};
