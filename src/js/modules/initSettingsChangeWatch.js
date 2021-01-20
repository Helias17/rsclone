import saveUserInfo from './saveUserInfo';

export default () => {
  const formSettingsProfile = document.getElementById('formSettingsProfile');
  const updateInfo = saveUserInfo.bind(null, formSettingsProfile);

  const global = document.getElementById('userGlobalSearch');
  global.addEventListener('change', updateInfo);

  const showMe = document.getElementById('userShowmeStatus');
  showMe.addEventListener('change', updateInfo);

  const langRadioAll = document.querySelectorAll('#settingsLang input[type="radio"]');
  langRadioAll.forEach((radio) => {
    radio.addEventListener('change', updateInfo);
  });

  const lookingSettingsTitle = document.getElementById('lookingSettingsTitle');
  const lookingRadioAll = document.querySelectorAll('#settingsLooking input[type="radio"]');
  lookingRadioAll.forEach((radio) => {
    radio.addEventListener('change', () => {
      updateInfo();
      lookingSettingsTitle.textContent = radio.dataset.text;
    });
  });
};
