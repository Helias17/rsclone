import { getWorksheets } from './users';
// import UserSlider from './UserSlider';
import sliderLikeUserCard from './sliderLikeUserCard';

export default async () => {
  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));
  const response = await getWorksheets(user.id);
  const userForRate = response[0];
  console.log('Authorized user id: \n', user.id);
  console.log('User for rate info: \n', userForRate);

  const mainUserCard = document.getElementById('mainUserCard');
  mainUserCard.dataset.userId = userForRate.id;

  // drop like buttons counter to 0. (counter for prohibite more than 1 click)
  const likeButtons = mainUserCard.querySelectorAll('.usercard__button');
  likeButtons.forEach((item) => {
    const btn = item;
    btn.dataset.click = 0;
  });

  const photos = userForRate.photos.split(',');
  sliderLikeUserCard.obj.init(photos);

  // hide full card info block, if it was previosly opened
  const usercardInfo = mainUserCard.querySelector('.usercard__info');
  usercardInfo.classList.remove('usercard__info_visible');

  const nameOnCard = mainUserCard.querySelector('.usercard__name');
  const nameUnderCard = mainUserCard.querySelector('.usercard__info-name');
  nameOnCard.textContent = userForRate.name;
  nameUnderCard.textContent = userForRate.name;

  const ageOnCard = mainUserCard.querySelector('.usercard__age');
  const ageUnderCard = mainUserCard.querySelector('.usercard__info-age');
  const todayDate = Date.now();
  const userForRateDate = Date.parse(userForRate.birth);
  const userForRateAge = (todayDate - userForRateDate) / 31536000000;
  ageOnCard.textContent = parseInt(userForRateAge, 10);
  ageUnderCard.textContent = parseInt(userForRateAge, 10);

  const cityEl = mainUserCard.querySelector('.usercard__city');
  const cityName = mainUserCard.querySelector('.usercard__city-name');

  if (userForRate.location) {
    cityName.textContent = userForRate.location;
    cityEl.classList.remove('usercard__city_hidden');
  } else {
    cityEl.classList.add('usercard__city_hidden');
  }

  const about = mainUserCard.querySelector('.usercard__info-about');
  if (userForRate.about) {
    about.textContent = userForRate.about;
  } else {
    about.textContent = '';
    about.classList.add('usercard__info-about_hidden');
  }

  const passionsContainer = mainUserCard.querySelector('.usercard__hobby-list');
  const userPassions = userForRate.passions ? userForRate.passions.split(',') : [];
  passionsContainer.innerHTML = '';

  let passionsObj = JSON.parse(localStorage.getItem('passionsTinderClone'));
  const passionsTimer = setInterval(() => {
    if (passionsObj) {
      passionsObj.list.forEach((item) => {
        if (userPassions.includes(item.id.toString())) {
          const li = document.createElement('li');
          li.classList.add('usercard__hobby-item');
          li.textContent = item.passion;
          passionsContainer.append(li);
        }
      });

      clearInterval(passionsTimer);
    } else {
      passionsObj = JSON.parse(localStorage.getItem('passionsTinderClone'));
      console.log('Waiting for loading passion list');
    }
  }, 100);
};
