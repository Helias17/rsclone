import { logout } from './users';
import addPreloaderHtml from './addPreloaderHtml';

export default () => {
  const logoutLink = document.getElementById('logoutLink');

  logoutLink.addEventListener('click', () => {
    logout();
    addPreloaderHtml();
  });
};
