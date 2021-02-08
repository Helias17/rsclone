export default () => {
  const col1Box = document.querySelector('.inner__col1-box');
  const messagesItems = document.querySelectorAll('.messages__item');

  col1Box.classList.remove('inner__col1-box_bg-dark');

  messagesItems.forEach((item) => {
    item.classList.remove('messages__item_active');
  });
};
