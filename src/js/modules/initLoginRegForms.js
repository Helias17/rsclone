import { addUser, login } from './users';
import prepareData from './prepareFormData';
import addPreloaderHtml from "./addPreloaderHtml";

export default () => {
  const registerForm = document.querySelector('#register-form');
  const registrationErrorMessage = document.querySelector('.modal__error-registration');

  registerForm.onsubmit = async (event) => {
  // stop our form submission from refreshing the page
    event.preventDefault();
    const data = prepareData(registerForm);
    addUser(data);

    const loginUser = await login(data);

    if (loginUser.id) {
      console.log('login', loginUser);
      addPreloaderHtml();
    } else {
      registrationErrorMessage.innerHTML = 'The email address is already taken.';
      console.log('The email address is already taken.');
    }
  };

  const loginForm = document.querySelector('#login-form');
  const loginErrorMessage = document.querySelector('.modal__error-login');

  loginForm.onsubmit = async (event) => {
  // stop our form submission from refreshing the page
    event.preventDefault();
    const data = prepareData(loginForm);
    console.log(data);
    const loginUser = await login(data);
    if (loginUser.id) {
      console.log('login', loginUser);
      addPreloaderHtml();
    } else {
      loginErrorMessage.innerHTML = 'Incorrect email or password.';
      console.log('login wrong');
    }
  };
};
