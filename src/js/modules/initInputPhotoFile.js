import uploadUserPhoto from './uploadUserPhoto';

export default () => {
  const fileInputs = document.querySelectorAll('#profileUserCard .js-photo-file');
  fileInputs.forEach((input) => {
    input.addEventListener('change', uploadUserPhoto);
  });
};
