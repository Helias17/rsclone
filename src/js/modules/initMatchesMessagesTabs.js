import toggleCssClass from './toggleCssClass';
import messageUnselect from './messageUnselect';

export default () => {
  const tabsBox = document.querySelector('.profile-tabs');
  const tabs = document.querySelectorAll('.profile-tabs__item');
  const matchesEl = document.querySelector('.matches');
  const messagesEl = document.querySelector('.messages');

  tabsBox.addEventListener('click', (e) => {
    const tabClicked = e.target.closest('.profile-tabs__item:not(.profile-tabs__item_active)');

    if (tabClicked) {
      // remove active tabs
      tabs.forEach((tab) => {
        tab.classList.remove('profile-tabs__item_active');
      });

      // set new active tab (clicked)
      tabClicked.classList.add('profile-tabs__item_active');

      // show-hide matches list
      toggleCssClass(matchesEl, 'matches_hidden');

      // show-hide messages list
      toggleCssClass(messagesEl, 'messages_hidden');

      // unselect message in messages tab
      messageUnselect();
    }
  });
};
