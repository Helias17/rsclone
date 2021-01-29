import { addLike } from './users';
import renderUserLikeCard from './renderUserLikeCard';

export default async () => {
  const buttons = document.querySelector('.usercard__buttons');
  const mainUserCard = document.getElementById('mainUserCard');
  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));

  buttons.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.usercard__button');

    if (clickedBtn && buttons.dataset.click === '0') {
      const data = {
        like: clickedBtn.dataset.name,
        recipient: parseInt(mainUserCard.dataset.userId, 10),
        sender: parseInt(user.id, 10),
      };
      addLike(data).then(() => { renderUserLikeCard(); });
      buttons.dataset.click = '1';
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft' && mainUserCard.dataset.state === 'active') {
      const data = {
        like: 'dislike',
        recipient: parseInt(mainUserCard.dataset.userId, 10),
        sender: parseInt(user.id, 10),
      };
      addLike(data).then(() => { renderUserLikeCard(); });
      buttons.dataset.click = '1';
    }
    if (e.code === 'ArrowRight' && mainUserCard.dataset.state === 'active') {
      const data = {
        like: 'like',
        recipient: parseInt(mainUserCard.dataset.userId, 10),
        sender: parseInt(user.id, 10),
      };
      addLike(data).then(() => { renderUserLikeCard(); });
      buttons.dataset.click = '1';
    }
  });
};
