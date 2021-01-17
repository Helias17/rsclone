import preloaderHtml from '../html/preloader.html'; // pink screen with tinder logo
import testForms from '../html/testForms.html'; // remove this line, it's just for test
import initLoginRegForms from './initLoginRegForms';
import checkAuth from './checkAuth';
import addInnerInterfaceHtml from './addInnerInterfaceHtml';

export default () => {
  const appEl = document.querySelector('.app');
  appEl.innerHTML = preloaderHtml;

  const isUserAuthorized = checkAuth();

  setTimeout(() => {
    // clear html of app container
    appEl.innerHTML = '';

    if (isUserAuthorized) {
      // show tinder app here if user is authorized
      addInnerInterfaceHtml();
    } else {
      // show login/register app here (login webpage)
      appEl.innerHTML = testForms; // remove this line, it's just for test
      initLoginRegForms();
    }
  }, 2000);
};
