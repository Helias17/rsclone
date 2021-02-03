export default () => {
  const editcardGallery = document.querySelector('.editcard__gallery');
  const userPhotoFileInput = document.querySelector('#userPhotoFileInput');

  editcardGallery.addEventListener('click', (e) => {
    const addPhotoBtn = e.target.closest('.editcard__gallery-item_blank');
    if (addPhotoBtn) {
      console.log('Choose new photo!');
      userPhotoFileInput.click();
    }
  });
};
