import iconAnonymosUser from '../../images/icon-anonymos-user.png';
import renderChat from './renderChat';
import renderUserMatchCard from './renderUserMatchCard';

export default (userId) => {
  const usersLocalStorage = localStorage.getItem('clone-tinder-matches');
  const users = JSON.parse(usersLocalStorage);
  const user = users.find((item) => item.id === parseInt(userId, 10));

  const photos = user.photos ? user.photos.split(',') : [iconAnonymosUser];

  const messengerUserIcon = document.querySelector('.messenger__user-icon');
  messengerUserIcon.style.backgroundImage = `url('${photos[0]}')`;

  const messengerHeaderTitle = document.querySelector('.messenger__header-title-name');
  messengerHeaderTitle.textContent = user.name;

  const messengerHeaderYears = document.querySelector('.messenger__header-title-years');
  const todayDate = Date.now();
  const userDate = Date.parse(user.birth);
  const userAge = (todayDate - userDate) / 31536000000;
  messengerHeaderYears.textContent = `, ${parseInt(userAge, 10)} years`;

  renderChat(user.name, photos[0]);
  renderUserMatchCard(user, photos);
};
