import { addUser, login, addLikesFromAllUsers } from './users';
import prepareData from './prepareFormData';
import addPreloaderHtml from './addPreloaderHtml';

export default () => {
  const registerForm = document.querySelector('#register-form');
  const registrationErrorMessage = document.querySelector('.modal__error-registration');

  registerForm.onsubmit = async (event) => {
  // stop our form submission from refreshing the page
    event.preventDefault();
    const data = prepareData(registerForm);
    try {
      const userData = await addUser(data);
      if (userData.id) {
        await addLikesFromAllUsers(userData);
        alert('Check your email to confirm registration.');
        await addPreloaderHtml();
      }
    } catch (e) {
      console.log((e));
      console.log('The email address is already taken.');
      registrationErrorMessage.innerHTML = 'The email address is already taken.';
    }
  };

  const loginForm = document.querySelector('#login-form');
  const loginErrorMessage = document.querySelector('.modal__error-login');

  loginForm.onsubmit = async (event) => {
  // stop our form submission from refreshing the page
    event.preventDefault();
    const data = prepareData(loginForm);
    const loginUser = await login(data);
    if (loginUser.id) {
      console.log('login', loginUser);
      addPreloaderHtml();
    } else if (loginUser.error) {
      loginErrorMessage.innerHTML = 'Your account is not activated';
      console.log('Account is not activated');
    } else {
      loginErrorMessage.innerHTML = 'Incorrect email or password.';
      console.log('login wrong');
    }
  };
};
