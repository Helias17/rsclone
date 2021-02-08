import getAuthorizedUser from './getAuthorizedUser';
import prepareData from './prepareFormData';
import { updateUser } from './users';
import renderUserLikeCard from './renderUserLikeCard';

export default async (form) => {
  const currentUser = getAuthorizedUser();

  if (currentUser && currentUser.email) {
    const data = prepareData(form);
    // eslint-disable-next-line no-console
    console.log(`data for saving: ${JSON.stringify(data)}`);
    const upUser = await updateUser(data, currentUser.id);
    if (upUser.id) {
      // eslint-disable-next-line no-console
      console.log('user updated', upUser);
      renderUserLikeCard();
      return upUser;
    }
  }

  return false;
};
