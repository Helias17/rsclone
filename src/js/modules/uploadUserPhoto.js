import saveUserInfo from './saveUserInfo';

export default (e) => {
  const formData = new FormData();

  formData.append('picture[]', e.target.files[0]);

  fetch('http://files.vhost154177.cpsite.ru', {
    method: 'POST',
    body: formData,
  }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      const formEditUserCard = document.querySelector('#formEditUserCard');
      const inputPhotos = formEditUserCard.querySelector('input[name="photos"]');
      const photosArr = inputPhotos.value ? inputPhotos.value.split(',') : [];
      photosArr.push(data.file);
      inputPhotos.value = photosArr.join(',');
      saveUserInfo(formEditUserCard);
      return data;
    });
};
