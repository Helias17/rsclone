import { addUser, login } from './users';
import prepareData from './prepareFormData';
import addPreloaderHtml from "./addPreloaderHtml";

export default () => {
  const registerForm = document.querySelector('#register-form');

  registerForm.onsubmit = (event) => {
  // stop our form submission from refreshing the page
    event.preventDefault();
    const data = prepareData(registerForm);
    addUser(data);
  };

  const loginForm = document.querySelector('#login-form');

  loginForm.onsubmit = async (event) => {
  // stop our form submission from refreshing the page
    event.preventDefault();
    const data = prepareData(loginForm);
    const loginUser = await login(data);
    if (loginUser.id) {
      console.log('login', loginUser);
      addPreloaderHtml();
    } else {
      console.log('login wrong');
    }
  };
};
