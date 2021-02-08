export default () => {
  const genderRadioAll = document.querySelectorAll('input[name="genderSet"]');
  const genderNotice = document.getElementById('genderNotice');
  let gender = '';

  genderRadioAll.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      gender = e.target.value;
      genderNotice.textContent = `
      You will 
      ${gender === 'everyone' ? '' : 'only'} 
      see ${gender} in the discovery.
      `;
    });
  });
};
