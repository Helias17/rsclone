import getAuthorizedUser from './getAuthorizedUser';
import prepareData from './prepareFormData';
import { updateUser } from './users';
import renderUserLikeCard from './renderUserLikeCard';

export default async (form) => {
  const currentUser = getAuthorizedUser();

  if (currentUser && currentUser.email) {
    const data = prepareData(form);
    console.log(`data for sending: ${JSON.stringify(data)}`);
    const upUser = await updateUser(data, currentUser.id);
    if (upUser.id) {
      console.log('user updated', upUser);
      renderUserLikeCard();
    }
    console.log('user not updated :-(');
  }
};
