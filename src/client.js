import { addUser, login, logout, updateUser, deleteUser } from './services/users';

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

const registerForm = document.querySelector('#register-form');

registerForm.onsubmit = (event) => {
// stop our form submission from refreshing the page
  event.preventDefault();
  const data = prepareData(registerForm);
  addUser(data);
};

const displayAuthorizedUser = () => {
  const currentUser = getAuthorizedUser();
  const currentUserBlock = document.getElementById('current-user');
  const logoutButton = document.getElementById('logout');

  if (currentUser && currentUser.email) {
    currentUserBlock.innerHTML = `${currentUser.name} ${currentUser.email}`;
    logoutButton.style.display = 'block';
  } else {
    currentUserBlock.innerHTML = 'Пользователь не авторизован';
    logoutButton.style.display = 'none';
  }
};

const loginForm = document.querySelector('#login-form');
console.log(loginForm);
loginForm.onsubmit = async (event) => {
  console.log('login');
// stop our form submission from refreshing the page
  event.preventDefault();
  const data = prepareData(loginForm);
  const loginUser = await login(data);
  if (loginUser.id) {
    console.log('login', loginUser);
  } else {
    console.log('login wrong');
  }
  displayAuthorizedUser();
};

const accountForm = document.querySelector('#account-form');

accountForm.onsubmit = async (event) => {
  const currentUser = getAuthorizedUser();
  if (currentUser && currentUser.email) {
    event.preventDefault();
    const data = prepareData(accountForm);
    const upUser = await updateUser(data, currentUser.id);
    if (upUser.id) {
      console.log('login', upUser);
    } else {
      console.log('login wrong');
    }
    displayAuthorizedUser();
  }
};

document.getElementById('logout').onclick = () => {
  logout();
  displayAuthorizedUser();
};

document.getElementById('delete-user').onclick = () => {
  const currentUser = getAuthorizedUser();
  if (currentUser && currentUser.id) {
    deleteUser(currentUser.id);
    displayAuthorizedUser();
  } else {
    console.log('Error deletion profile!!!');
  }
};

displayAuthorizedUser();
