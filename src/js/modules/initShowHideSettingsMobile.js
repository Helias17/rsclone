import settingsProfile from './settingsProfile.js';
import hideSettingsNestedMenu from './hideSettingsNestedMenu.js';

export default () => {
  const btnUserSettings = document.getElementById('btnUserSettings');
  const profileSettings = document.querySelector('.inner__col1-profile');
  const closeLink = document.querySelector('.settings-close-mobile');

  btnUserSettings.addEventListener('click', () => {
    profileSettings.classList.toggle('inner__col1-profile_active');
    closeLink.classList.add('settings-close-mobile_visible');
  });

  closeLink.addEventListener('click', () => {
    if (!settingsProfile.nestedMenuOpened) {
      profileSettings.classList.remove('inner__col1-profile_active');
      closeLink.classList.remove('settings-close-mobile_visible');
    } else {
      hideSettingsNestedMenu();
    }
  });
};
