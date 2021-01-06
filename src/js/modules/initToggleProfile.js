export default () => {
  const profileHeader = document.querySelector('.profile-header');
  const profileLinkBack = document.querySelector('.profile-header__arrow');
  profileHeader.addEventListener('click', (e) => {
    // show/hide arrow in profile header on desktop
    if (e.target.closest('.profile-header__wrap, .profile-header__arrow')) {
      profileLinkBack.classList.toggle('profile-header__arrow_visible');
    }
  });
};
