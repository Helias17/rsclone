export default () => {
  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));
  const passionsContainer = document.getElementById('editcardPassions');
  passionsContainer.innerHTML = '';

  const userPassions = user.passions ? user.passions.split(',') : [];

  const passionsObj = JSON.parse(localStorage.getItem('passionsTinderClone'));

  passionsObj.list.forEach((item) => {
    const passionItem = document.createElement('p');
    passionItem.classList.add('editcard__passion');
    passionItem.dataset.id = item.id;

    if (userPassions.includes(item.id.toString())) {
      passionItem.classList.add('editcard__passion_active');
    }

    passionItem.textContent = item.passion;
    passionsContainer.append(passionItem);
  });
};
