import renderMessenger from './renderMessenger';

export default () => {
  const matchList = document.querySelector('.matches__list');
  const messengerEl = document.querySelector('.inner__messenger');
  const closeBtn = document.querySelector('.messenger__close');
  const col2 = document.querySelector('.inner__col2');
  const arrowHeaderMobile = document.querySelector('.messenger__header-back');
  const mainUserCard = document.getElementById('mainUserCard');

  matchList.addEventListener('click', (e) => {
    const clickedUser = e.target.closest('.matches__item');
    if (clickedUser) {
      messengerEl.classList.add('inner__messenger_visible');
      col2.classList.remove('inner__col2_hidden-mobile');
      mainUserCard.dataset.state = 'inactive'; // state for keyboard buttons support
      renderMessenger(clickedUser.dataset.userid);
    }
  });

  closeBtn.addEventListener('click', () => {
    messengerEl.classList.remove('inner__messenger_visible');
    mainUserCard.dataset.state = 'active';
  });

  // close messenger on mobile
  arrowHeaderMobile.addEventListener('click', () => {
    messengerEl.classList.remove('inner__messenger_visible');
    col2.classList.add('inner__col2_hidden-mobile');
    mainUserCard.dataset.state = 'active';
  });
};
