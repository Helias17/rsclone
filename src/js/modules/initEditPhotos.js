import saveUserInfo from './saveUserInfo';
import renderUserInfo from './renderUserInfo';

export default () => {
  const editcardGallery = document.querySelector('.editcard__gallery');
  const userPhotoFileInput = document.querySelector('#userPhotoFileInput');

  editcardGallery.addEventListener('click', (e) => {
    const addPhotoBtn = e.target.closest('.editcard__gallery-item_blank');
    if (addPhotoBtn) {
      userPhotoFileInput.click();
    }

    const removePhotoBtn = e.target.closest('.editcard__gallery-item:not(.editcard__gallery-item_blank)');
    if (removePhotoBtn) {
      // eslint-disable-next-line no-alert
      const removeAnswer = window.confirm('Are you sure to remove this photo?');
      if (removeAnswer) {
        const formEditUserPhotos = document.querySelector('#formEditUserPhotos');
        const inputPhotos = document.querySelector('#userPhotos');
        const photosArr = inputPhotos.value.split(',');
        photosArr.splice(removePhotoBtn.dataset.num, 1); // remove photo URL from array
        inputPhotos.value = photosArr.join(','); // join photo array to nidden input
        saveUserInfo(formEditUserPhotos).then(() => renderUserInfo());
      }
    }
  });
};
