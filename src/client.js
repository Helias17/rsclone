import { addUser, login, logout, updateUser, deleteUser, addLike, getPairs, getWorksheets, getPassions } from './js/modules/users';

// TODO вынести в хелпер
const md5 = require('md5');

const prepareData = (form) => {
  const data = {};
  [...form.elements].forEach((el) => {
    if (el.getAttribute('name')) {
      const nameField = el.getAttribute('name');
      data[nameField] = nameField === 'password' ? md5(el.value) : el.value;
    }
  });
  return data;
};

// TODO вынести в хелпер
// Если не null, то возвращает все данные по пользователю, обратно - пользователь не авторизован
const getAuthorizedUser = () => JSON.parse(localStorage.getItem('clone-tinder-user'));
const currentUser = getAuthorizedUser();

const getUserPairs = async () => {
  const userPairs = await getPairs(currentUser.id);
  return userPairs;
};

const getNextWorksheets = async () => {
  const [worksheet] = await getWorksheets(currentUser.id);
  return worksheet;
};

const getPassionsList = async () => {
  const passionsList = await getPassions();
  console.log(passionsList);
  return passionsList;
};
