export default () => {
  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));

  const userPhotosArr = user.photos ? user.photos.split(',') : [];
  const userAvatar = document.querySelector('.profile-header__user-icon');
  userAvatar.style.backgroundImage = userPhotosArr.length > 0 ? `url(${userPhotosArr[0]})` : 'url(\'assets/icon-tinder-orange.svg\')';

  const userEmail = document.getElementById('userEmailSettings');
  userEmail.textContent = user.email;

  const userEmailNestedMenu = document.getElementById('userEmailNestedMenu');
  userEmailNestedMenu.textContent = user.email;

  const userEmailStatus = document.getElementById('userEmailStatus');
  const userEmailStatusNote = document.getElementById('userEmailStatusNote');
  if (user.email_status === 1) {
    userEmailStatus.textContent = '✔';
    userEmailStatus.classList.add('settings__item-email-status_verified');
    userEmailStatusNote.textContent = 'Email verified';
    userEmailStatusNote.classList.add('settings__item-desc_blue');
  } else {
    userEmailStatus.textContent = '?';
    userEmailStatus.classList.add('settings__item-email-status_unverified');
    userEmailStatusNote.textContent = 'Email unverified (check your inbox)';
    userEmailStatusNote.classList.add('settings__item-desc_red');
  }

  const userGlobalSearch = document.getElementById('userGlobalSearch');
  userGlobalSearch.checked = user.global_mode === 1;

  const userShowmeStatus = document.getElementById('userShowmeStatus');
  userShowmeStatus.checked = user.show_mine === 1;

  let lookingNum = 0;
  if (user.looking !== null) {
    lookingNum = user.looking;
  } else if (user.gender_id !== null) {
    lookingNum = user.gender_id > 0 ? 0 : 1;
  }
  const lookingRadio = document.querySelector(`div[data-name="lookingFor"] input[data-num="${lookingNum}"]`);
  lookingRadio.checked = true;

  const lookingTitle = document.getElementById('lookingSettingsTitle');
  switch (lookingNum) {
    case 0:
      lookingTitle.textContent = 'Men';
      break;
    case 1:
      lookingTitle.textContent = 'Woman';
      break;
    case 2:
      lookingTitle.textContent = 'Everyone';
      break;

    default: break;
  }

  const profileUserCard = document.getElementById('profileUserCard');
  const nameProfileUserCard = profileUserCard.querySelector('.usercard__info-name');
  nameProfileUserCard.textContent = user.name;

  const ageProfileUserCard = profileUserCard.querySelector('.usercard__info-age');
  const todayDate = Date.now();
  const userDate = Date.parse(user.birth);
  const userAge = (todayDate - userDate) / 31536000000;
  ageProfileUserCard.textContent = parseInt(userAge, 10);

  const genderProfileUserCard = profileUserCard.querySelector('.usercard__gender');
  if (parseInt(user.gender_id, 10) === 0) {
    genderProfileUserCard.classList.add('usercard__gender_man');
    genderProfileUserCard.textContent = 'Man';
  } else if (parseInt(user.gender_id, 10) === 1) {
    genderProfileUserCard.classList.add('usercard__gender_woman');
    genderProfileUserCard.textContent = 'Woman';
  } else if (parseInt(user.gender_id, 10) === 2) {
    genderProfileUserCard.classList.add('usercard__gender_trans');
    genderProfileUserCard.textContent = 'Trans';
  }

  const cityEl = profileUserCard.querySelector('.usercard__city');
  const cityProfileUserCard = profileUserCard.querySelector('.usercard__city-name');
  const locationEditCard = document.getElementById('locationEditCard');

  if (user.location) {
    cityProfileUserCard.textContent = user.location;
    cityEl.classList.remove('usercard__city_hidden');
    locationEditCard.value = user.location;
  } else {
    cityEl.classList.add('usercard__city_hidden');
  }

  const aboutProfileUserCard = profileUserCard.querySelector('.usercard__info-about');
  const aboutEditCard = document.querySelector('.editcard__about-textarea');
  if (user.about) {
    aboutProfileUserCard.textContent = user.about;
    aboutEditCard.value = user.about;
  } else {
    aboutProfileUserCard.textContent = '';
    aboutProfileUserCard.classList.add('usercard__info-about_hidden');
  }

  if (user.gender_id !== null) {
    const curGenderProfileUserCard = profileUserCard.querySelector(`.js-genderEditCard input[data-num="${user.gender_id}"]`);
    curGenderProfileUserCard.checked = true;
  }
};
