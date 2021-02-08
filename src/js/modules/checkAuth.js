import getAuthorizedUser from './getAuthorizedUser';

export default () => {
  const currentUser = getAuthorizedUser();

  if (currentUser && currentUser.email) {
    return true;
  }

  return false;
};
