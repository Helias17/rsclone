import {deleteUser, login} from './users';
import addPreloaderHtml from './addPreloaderHtml';

export default () => {
  const deleteAccount = document.getElementById('deleteAccount');

  deleteAccount.addEventListener('click', async () => {
    deleteUser().then(() => console.log('delete user'))
      .then(() => addPreloaderHtml());
  });
};
