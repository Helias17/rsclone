import { data } from 'dom7';
import saveUserInfo from './saveUserInfo';
import renderUserInfo from './renderUserInfo';

const saveUploadedPhotoToDB = (photo) => {
  if (photo) {
    const formEditUserPhotos = document.querySelector('#formEditUserPhotos');
    const inputPhotos = document.querySelector('#userPhotos');
    const photosArr = inputPhotos.value ? inputPhotos.value.split(',') : [];
    photosArr.push(photo); // add uploaded photo URL to array
    inputPhotos.value = photosArr.join(','); // join photo array to nidden input
    saveUserInfo(formEditUserPhotos).then(() => renderUserInfo());
  }
};

export default (e) => {
  const formData = new FormData();

  formData.append('picture[]', e.target.files[0]);

  fetch('http://files.vhost154177.cpsite.ru', {
    method: 'POST',
    body: formData,
  }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      saveUploadedPhotoToDB(data.file);
      return data;
    });
};
