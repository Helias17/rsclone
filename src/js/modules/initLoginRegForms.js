import { addUser, login } from './users';
import prepareData from './prepareFormData';
import addPreloaderHtml from "./addPreloaderHtml";

export default () => {
  const registerForm = document.querySelector('#register-form');

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
      console.log('login wrong');
    }
  };

  const loginForm = document.querySelector('#login-form');

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
      console.log('login wrong');
    }
  };
};
