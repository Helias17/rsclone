import { addLike } from './users';

export default async () => {
  const buttons = document.querySelector('.usercard__buttons');
  const mainUserCard = document.getElementById('mainUserCard');
  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));

  buttons.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.usercard__button');

    if (clickedBtn) {
      const data = {
        like: clickedBtn.dataset.name,
        recipient: parseInt(mainUserCard.dataset.userId, 10),
        sender: parseInt(user.id, 10),
      };
      addLike(data).then((response) => { console.log(response); });
    }
  });
};
