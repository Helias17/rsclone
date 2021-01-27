import MicroModal from 'micromodal';

const updateMainPage = (lang) => {
  const text = {
    ruLang: {
      login: 'Войдите',
    },
    engLang: {
      login: 'Log in',
    },
  };

  const loginButton = document.querySelector('.header__login');
  loginButton.textContent = text[lang].login;
};

const updateLang = () => {
  let curLang = localStorage.getItem('curLang');
  const headerLangTitle = document.querySelector('.header__language-span');

  curLang = curLang || 'ruLang';

  const langButtons = document.querySelectorAll('.languages__button');

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.children[0].innerHTML;
      headerLangTitle.textContent = lang;

      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      button.classList.add('selected');

      localStorage.setItem('curLang', button.id);
      curLang = button.id;

      updateMainPage(curLang);
      // MicroModal.close('modal-3');
    });
  });
};

export default updateLang;
