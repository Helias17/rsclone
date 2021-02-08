import uploadUserPhoto from './uploadUserPhoto';

export default () => {
  const fileInputs = document.querySelectorAll('#userPhotoFileInput');
  fileInputs.forEach((input) => {
    input.addEventListener('change', uploadUserPhoto);
  });
};
