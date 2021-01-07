export default () => {
  const messagesEl = document.querySelector('.messages');
  const col1Box = document.querySelector('.inner__col1-box');

  messagesEl.addEventListener('click', (e) => {
    const messagesItems = document.querySelectorAll('.messages__item');
    messagesItems.forEach((item) => {
      item.classList.remove('messages__item_active');
    });

    const messageElem = e.target.closest('.messages__item');
    messageElem.classList.add('messages__item_active');
    col1Box.classList.add('inner__col1-box_bg-dark');
  });
};
