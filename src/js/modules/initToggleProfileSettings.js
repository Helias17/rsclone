import settingsProfile from './settingsProfile.js';
import hideSettingsNestedMenu from './hideSettingsNestedMenu.js';

export default () => {
  const profileHeader = document.querySelector('.profile-header');
  const profileLinkBack = document.querySelector('.profile-header__arrow');
  const profileSettings = document.querySelector('.inner__col1-profile');
  const profileUsercard = document.querySelector('.inner__profile-usercard');

  profileHeader.addEventListener('click', (e) => {
    // show/hide arrow in profile header on desktop
    if (e.target.closest('.profile-header__wrap, .profile-header__arrow')) {
      if (!settingsProfile.nestedMenuOpened) {
        profileLinkBack.classList.toggle('profile-header__arrow_visible');
        profileSettings.classList.toggle('inner__col1-profile_active');
        profileUsercard.classList.toggle('inner__profile-usercard_visible');
      } else {
        hideSettingsNestedMenu();
      }
    }
  });
};
