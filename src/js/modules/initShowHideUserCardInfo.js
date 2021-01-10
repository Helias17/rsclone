export default () => {
  const shortInfo = document.getElementById('mainUserCardShortInfo');
  const cardInfo = document.getElementById('mainUserCardInfo');
  const hideFullInfoBtn = document.querySelector('#mainUserCard .usercard__hide-fullinfo');

  shortInfo.addEventListener('click', () => {
    cardInfo.classList.toggle('usercard__info_visible');
    hideFullInfoBtn.classList.toggle('usercard__hide-fullinfo_visible');
    shortInfo.classList.toggle('usercard__short-info_hidden');
  });

  hideFullInfoBtn.addEventListener('click', () => {
    cardInfo.classList.toggle('usercard__info_visible');
    hideFullInfoBtn.classList.toggle('usercard__hide-fullinfo_visible');
    shortInfo.classList.toggle('usercard__short-info_hidden');
  });
};
