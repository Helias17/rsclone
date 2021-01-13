export default () => {
  const userIcon = document.querySelector('.messenger__user-icon');
  const matchUsercard = document.querySelector('.inner__match-usercard');
  const hideUsercardBtn = document.querySelector('#matchUserCard .usercard__hide-fullinfo');

  userIcon.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      matchUsercard.classList.add('inner__match-usercard_visible-mobile');
    }
  });

  hideUsercardBtn.addEventListener('click', () => {
    matchUsercard.classList.remove('inner__match-usercard_visible-mobile');
  });
};
