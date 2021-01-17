export default () => {
  const shortInfo = document.getElementById('mainUserCardShortInfo');
  const cardInfo = document.getElementById('mainUserCardInfo');
  const hideFullInfoBtn = document.querySelector('#mainUserCard .usercard__hide-fullinfo');

  const toggle = () => {
    cardInfo.classList.toggle('usercard__info_visible');
    hideFullInfoBtn.classList.toggle('usercard__hide-fullinfo_visible');
    shortInfo.classList.toggle('usercard__short-info_hidden');
  };

  shortInfo.addEventListener('click', toggle);

  hideFullInfoBtn.addEventListener('click', toggle);

  // add support of keypresses up and down arrows to show full card
  document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowUp') {
      toggle();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowDown') {
      toggle();
    }
  });
};
