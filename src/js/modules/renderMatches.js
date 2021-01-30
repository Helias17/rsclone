import { getPairs } from './users';

export default async () => {
  const user = JSON.parse(localStorage.getItem('clone-tinder-user'));
  const matches = await getPairs(user.id);
  localStorage.setItem('clone-tinder-matches', JSON.stringify(matches));
  const matchesNum = document.getElementById('newMatchesNum');

  const matchesList = document.querySelector('.matches__list');
  if (matches.length) {
    matchesNum.textContent = matches.length;
    matchesNum.classList.remove('profile-tabs__item-num_hidden');

    matchesList.innerHTML = matches.reduce((html, card) => {
      const photos = card.photos.split(',');
      return `
      ${html}
      <li class="matches__item" data-userid="${card.id}" style="background-image: url('${photos[0]}');">
      <p class="matches__item-title">${card.name}</p>
      </li>`;
    }, '');
  } else {
    matchesList.innerHTML = '<li class="matches__item-no-matches">No matches, yet...</li>';
    matchesNum.classList.add('profile-tabs__item-num_hidden');
  }
};
