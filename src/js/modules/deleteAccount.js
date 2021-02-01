import { deleteUser } from './users';
import addPreloaderHtml from './addPreloaderHtml';

export default () => {
  const deleteAccount = document.getElementById('deleteAccount');

  deleteAccount.addEventListener('click', async () => {
    deleteUser().then(() => addPreloaderHtml());
  });
};
