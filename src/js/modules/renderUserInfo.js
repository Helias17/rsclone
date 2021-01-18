export default () => {
  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));

  const userAvatar = document.querySelector('.profile-header__user-icon');
  userAvatar.style.backgroundImage = 'url(\'http://rustartup.com/tinder/images/users/user1-2.jpg\')';

  const userEmail = document.getElementById('userEmailSettings');
  userEmail.textContent = user.email;

  const userEmailNestedMenu = document.getElementById('userEmailNestedMenu');
  userEmailNestedMenu.textContent = user.email;

  const userEmailStatus = document.getElementById('userEmailStatus');
  const userEmailStatusNote = document.getElementById('userEmailStatusNote');
  if (user.emailStatus === true) {
    userEmailStatus.textContent = '✔';
    userEmailStatus.classList.add('settings__item-email-status_verified');
    userEmailStatusNote.textContent = 'Email verified';
  } else {
    userEmailStatus.textContent = '?';
    userEmailStatus.classList.add('settings__item-email-status_unverified');
    userEmailStatusNote.textContent = 'Email unverified (check your inbox)';
  }

  const userGlobalSearch = document.getElementById('userGlobalSearch');
  userGlobalSearch.checked = user.global_mode === 1;

  const userShowmeStatus = document.getElementById('userShowmeStatus');
  userShowmeStatus.checked = user.show_mine === 1;

  let lookingNum = 0;
  if (user.looking !== null) {
    lookingNum = user.looking;
  } else if (user.gender_id !== null) {
    lookingNum = user.gender_id > 0 ? 0 : 1;
  }
  const lookingRadio = document.querySelector(`div[data-name="lookingFor"] input[data-num="${lookingNum}"]`);
  lookingRadio.checked = true;

  const lookingTitle = document.getElementById('lookingSettingsTitle');
  switch (lookingNum) {
    case 0:
      lookingTitle.textContent = 'Men';
      break;
    case 1:
      lookingTitle.textContent = 'Woman';
      break;
    case 2:
      lookingTitle.textContent = 'Everyone';
      break;

    default: break;
  }
};
