export default () => {
  const headerMenu = document.querySelector('.mobile-header__list');
  const userCardIcon = document.getElementById('userCardMenuIcon');
  const dialogIcon = document.getElementById('dialogMenuIcon');
  const profileIcon = document.getElementById('profileMenuIcon');
  const col2 = document.querySelector('.inner__col2');
  const mainUsercard = document.querySelector('.inner__main-usercard');
  const matchUsercard = document.querySelector('.inner__match-usercard');
  const profileUsercard = document.querySelector('.inner__profile-usercard');
  const messenger = document.querySelector('.inner__messenger');

  const setMenuIconActive = (icon) => {
    // remove active from all icons
    userCardIcon.classList.remove('mobile-header__item-icon_active');
    dialogIcon.classList.remove('mobile-header__item-icon_active');
    profileIcon.classList.remove('mobile-header__item-icon_active');

    // set active icon
    icon.classList.add('mobile-header__item-icon_active');
  };

  headerMenu.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('.mobile-header__item');

    if (clickedItem) {
      if (clickedItem.id === 'userCardMenuItem') {
        col2.classList.remove('inner__col2_hidden-mobile');
        mainUsercard.classList.remove('inner__main-usercard_hidden-mobile');
        matchUsercard.classList.remove('inner__match-usercard_visible-mobile');
        profileUsercard.classList.remove('inner__profile-usercard_visible');
        setMenuIconActive(userCardIcon);
      }

      if (clickedItem.id === 'dialogMenuItem') {
        col2.classList.add('inner__col2_hidden-mobile');
        mainUsercard.classList.add('inner__main-usercard_hidden-mobile');
        profileUsercard.classList.remove('inner__profile-usercard_visible');
        setMenuIconActive(dialogIcon);
      }

      if (clickedItem.id === 'profileMenuItem') {
        col2.classList.remove('inner__col2_hidden-mobile');
        messenger.classList.remove('inner__messenger_visible');
        profileUsercard.classList.add('inner__profile-usercard_visible');
        setMenuIconActive(profileIcon);
      }
    }
  });
};
