// function copy selected passions to hidden input

export default () => {
  const inputPassionsEl = document.getElementById('editcardSelectedPassions');
  const selectedPassions = document.querySelectorAll('.editcard__passion_active');

  const selectedPassionsIdArr = Array.from(selectedPassions).map((item) => item.dataset.id);
  inputPassionsEl.value = selectedPassionsIdArr.join(',');
};
