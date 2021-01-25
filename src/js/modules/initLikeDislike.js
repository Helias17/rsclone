import { addLike } from './users';
import renderUserLikeCard from './renderUserLikeCard';

export default async () => {
  const buttons = document.querySelector('.usercard__buttons');
  const mainUserCard = document.getElementById('mainUserCard');
  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));

  buttons.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.usercard__button');

    if (clickedBtn && !clickedBtn.dataset.click) {
      const data = {
        like: clickedBtn.dataset.name,
        recipient: parseInt(mainUserCard.dataset.userId, 10),
        sender: parseInt(user.id, 10),
      };
      addLike(data).then((response) => { renderUserLikeCard(); });
      clickedBtn.dataset.click = 1;
    } else {
      console.log('This button was already clicked!');
    }
  });
};
