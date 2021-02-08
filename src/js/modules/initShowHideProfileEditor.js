import renderPassionsEditProfile from './renderPassionsEditProfile';

export default () => {
  const editcard = document.querySelector('.editcard');
  const btnEditProfile = document.getElementById('btnEditProfile');
  const btnSaveProfile = document.getElementById('btnSaveEditProfile');
  const btnCancelProfile = document.getElementById('btnCancelEditProfile');
  const btnUserSettings = document.getElementById('btnUserSettings');

  const showEditorButtons = () => {
    btnSaveProfile.classList.remove('btn_hidden');
    btnCancelProfile.classList.remove('btn_hidden');
    btnUserSettings.classList.add('btn_hidden');
    btnEditProfile.classList.add('btn_hidden');
  };

  const hideEditorButtons = () => {
    btnSaveProfile.classList.add('btn_hidden');
    btnCancelProfile.classList.add('btn_hidden');
    btnUserSettings.classList.remove('btn_hidden');
    btnEditProfile.classList.remove('btn_hidden');
  };

  btnEditProfile.addEventListener('click', () => {
    editcard.classList.add('editcard_visible');
    renderPassionsEditProfile();
    showEditorButtons();
  });

  btnCancelProfile.addEventListener('click', () => {
    editcard.scrollTop = 0;
    editcard.classList.remove('editcard_visible');
    hideEditorButtons();
  });

  btnSaveProfile.addEventListener('click', () => {
    editcard.scrollTop = 0;
    editcard.classList.remove('editcard_visible');
    btnEditProfile.classList.remove('btn_hidden');
    hideEditorButtons();
  });
};
