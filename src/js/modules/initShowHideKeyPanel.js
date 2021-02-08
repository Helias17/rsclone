export default () => {
  const keyPanelBtn = document.querySelector('.keys-panel__btn');
  const keyPanel = document.querySelector('.keys-panel__list');

  const changeBtnText = () => {
    const btnText = keyPanelBtn.textContent;
    const btnAltText = keyPanelBtn.dataset.text;
    keyPanelBtn.textContent = btnAltText;
    keyPanelBtn.dataset.text = btnText;
  };

  const keyPanelState = localStorage.getItem('keyPanelState');

  if (keyPanelState === 'hidden') {
    keyPanel.classList.add('keys-panel__list_hidden');
    changeBtnText();
  }

  keyPanelBtn.addEventListener('click', () => {
    keyPanel.classList.toggle('keys-panel__list_hidden');
    keyPanelBtn.classList.toggle('keys-panel__btn_active');
    changeBtnText();

    if (keyPanel.classList.contains('keys-panel__list_hidden')) {
      localStorage.setItem('keyPanelState', 'hidden');
    } else {
      localStorage.setItem('keyPanelState', 'visible');
    }
  });
};
