export default () => {
  const editcardPassions = document.getElementById('editcardPassions');

  const countSelectedPassions = () => {
    const selectedPassions = editcardPassions.querySelectorAll('.editcard__passion_active');
    return selectedPassions.length;
  };

  editcardPassions.addEventListener('click', (e) => {
    const clickedPassion = e.target.closest('.editcard__passion');

    if (clickedPassion) {
      if (clickedPassion.classList.contains('editcard__passion_active')) {
        clickedPassion.classList.remove('editcard__passion_active');
      } else if (countSelectedPassions() < 5 && !clickedPassion.classList.contains('editcard__passion_active')) {
        clickedPassion.classList.add('editcard__passion_active');
      }
    }
  });
};
