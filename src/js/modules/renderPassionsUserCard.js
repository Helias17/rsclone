export default () => {
  const profileUserCard = document.getElementById('profileUserCard');
  const passionsContainer = profileUserCard.querySelector('.usercard__hobby-list');
  passionsContainer.innerHTML = '';

  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));
  const userPassions = user.passions ? user.passions.split(',') : [];

  const passionsObj = JSON.parse(localStorage.getItem('passionsTinderClone'));

  passionsObj.list.forEach((item) => {
    if (userPassions.includes(item.id.toString())) {
      const li = document.createElement('li');
      li.classList.add('usercard__hobby-item');
      li.textContent = item.passion;
      passionsContainer.append(li);
    }
  });
};
