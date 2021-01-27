const updateLang = () => {
  let curLang = localStorage.getItem('curLang');
  const headerLangTitle = document.querySelector('.header__language-span');

  curLang = curLang || 'ruLang';

  const langButtons = document.querySelectorAll('.languages__button');

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.children[0].innerHTML;
      localStorage.setItem('curLang', button.id);
      headerLangTitle.textContent = lang;
    });
  });
};

export default updateLang;
