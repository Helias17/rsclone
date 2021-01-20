export default () => {
  const curLang = localStorage.getItem('curLang');
  const langMenuTitle = document.getElementById('langMenuTitle');

  if (curLang) {
    const curLangRadio = document.getElementById(curLang);
    curLangRadio.checked = true;
    langMenuTitle.textContent = curLangRadio.value;
  }

  const langRadioAll = document.querySelectorAll('input[name="lang"]');

  langRadioAll.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      localStorage.setItem('curLang', e.target.id);
      langMenuTitle.textContent = e.target.value;
    });
  });
};
