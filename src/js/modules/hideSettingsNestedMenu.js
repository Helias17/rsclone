import settingsProfile from './settingsProfile.js';

export default () => {
  const settingsNestedAll = document.querySelectorAll('.settings_nested');
  const settingsEl = document.getElementById('settingsProfile');

  // hide nested menu
  settingsNestedAll.forEach((nestedMenu) => {
    nestedMenu.classList.remove('settings_nested-active');
  });

  // enable scroll for parent block
  settingsEl.classList.remove('settings_overflow-hidden');

  settingsProfile.nestedMenuOpened = false;
};
