import settingsProfile from './settingsProfile.js';

export default () => {
  const settingsEl = document.getElementById('settingsProfile');
  const settingsNestedAll = document.querySelectorAll('.settings_nested');

  settingsEl.addEventListener('click', (e) => {
    const clickedElem = e.target;

    // check if click on setting menu link which has a nested menu item
    if (clickedElem.closest('.js-has-nested')) {
      const nestedName = clickedElem.closest('.js-has-nested').dataset.name;

      // disable scroll for parent block
      settingsEl.classList.add('settings_overflow-hidden');

      // show nested menu
      settingsNestedAll.forEach((nestedMenu) => {
        if (nestedMenu.dataset.name === nestedName) {
          nestedMenu.classList.add('settings_nested-active');
          settingsProfile.nestedMenuOpened = true;
        }
      });
    }
  });
};
