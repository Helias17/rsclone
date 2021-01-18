import md5 from 'md5';

export default (form) => {
  const data = {};
  [...form.elements].forEach((el) => {
    if (el.getAttribute('name')) {
      const nameField = el.getAttribute('name');
      if (nameField === 'password' || el.getAttribute('type') === 'password') {
        data[nameField] = md5(el.value);
      } else if (el.getAttribute('type') === 'checkbox') {
        data[nameField] = el.checked ? 1 : 0;
      } else if (el.getAttribute('type') === 'radio' && el.checked === true) {
        console.log(el.value);
        data[nameField] = el.value;
      } else if (el.getAttribute('type') !== 'radio') {
        data[nameField] = el.value;
      }
    }
  });
  return data;
};
