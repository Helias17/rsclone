import getAuthorizedUser from './getAuthorizedUser';
import prepareData from './prepareFormData';
import { updateUser } from './users';

export default async (form) => {
  const currentUser = getAuthorizedUser();

  if (currentUser && currentUser.email) {
    const data = prepareData(form);
    console.log(data);
    const upUser = await updateUser(data, currentUser.id);
    if (upUser.id) {
      console.log('user updated', upUser);
    } else {
      console.log('user not updated :-(');
    }
  }
};
