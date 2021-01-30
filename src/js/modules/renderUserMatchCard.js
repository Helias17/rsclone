import sliders from './sliders';

export default (user, photos) => {
  sliders.matchCard.init(photos);

  const matchUserCard = document.getElementById('matchUserCard');

  const nameUnderCard = matchUserCard.querySelector('.usercard__info-name');
  nameUnderCard.textContent = user.name;

  const ageUnderCard = matchUserCard.querySelector('.usercard__info-age');
  const todayDate = Date.now();
  const userDate = Date.parse(user.birth);
  const userAge = (todayDate - userDate) / 31536000000;
  ageUnderCard.textContent = parseInt(userAge, 10);

  const gender = matchUserCard.querySelector('.usercard__gender');
  gender.classList.remove(...gender.classList); // clear all classes
  if (parseInt(user.gender_id, 10) === 1) {
    gender.classList.add('usercard__gender', 'usercard__gender_man');
    gender.textContent = 'Man';
  } else if (parseInt(user.gender_id, 10) === 2) {
    gender.classList.add('usercard__gender', 'usercard__gender_woman');
    gender.textContent = 'Woman';
  } else if (parseInt(user.gender_id, 10) === 3) {
    gender.classList.add('usercard__gender', 'usercard__gender_trans');
    gender.textContent = 'Trans';
  }

  const cityEl = matchUserCard.querySelector('.usercard__city');
  const cityName = matchUserCard.querySelector('.usercard__city-name');

  if (user.location) {
    cityName.textContent = user.location;
    cityEl.classList.remove('usercard__city_hidden');
  } else {
    cityEl.classList.add('usercard__city_hidden');
  }

  const about = matchUserCard.querySelector('.usercard__info-about');
  if (user.about) {
    about.textContent = user.about;
  } else {
    about.textContent = '';
    about.classList.add('usercard__info-about_hidden');
  }

  const passionsContainer = matchUserCard.querySelector('.usercard__hobby-list');
  const userPassions = user.passions ? user.passions.split(',') : [];
  passionsContainer.innerHTML = '';

  const passionsObj = JSON.parse(localStorage.getItem('passionsTinderClone'));
  passionsObj.list.forEach((item) => {
    if (userPassions.includes(item.id.toString())) {
      const li = document.createElement('li');
      li.classList.add('usercard__hobby-item');
      li.textContent = item.passion;
      passionsContainer.append(li);
    }
  });
};
