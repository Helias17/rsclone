const setCity = (city) => {
  const location = document.querySelectorAll('.settings__item-value')[1];
  location.innerHTML = city;
};

export default setCity;
