import saveUserInfo from './saveUserInfo';

export default () => {
  const formSettingsProfile = document.getElementById('formSettingsProfile');
  const updateInfo = saveUserInfo.bind(null, formSettingsProfile);

  const global = document.getElementById('userGlobalSearch');
  global.addEventListener('change', updateInfo);

  const showMe = document.getElementById('userShowmeStatus');
  showMe.addEventListener('change', updateInfo);
};
