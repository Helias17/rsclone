import { getPassions } from './users';

export default async () => {
  let passionsObj = JSON.parse(localStorage.getItem('passionsTinderClone'));
  const nowDate = Date.now();
  let timeDiff = 0;

  // calc how old passions list in localstorage
  if (passionsObj) {
    timeDiff = parseInt((nowDate - passionsObj.date) / 1000, 10);
  }

  // if no passions in localStorage or it's older than 600 seconds, then update list from DB
  // and save to localStorage
  if (!passionsObj || !Array.isArray(passionsObj.list) || timeDiff > 600) {
    const loadedPassionsList = await getPassions();
    const date = Date.now();

    passionsObj = {
      date,
      list: loadedPassionsList,
    };

    localStorage.setItem('passionsTinderClone', JSON.stringify(passionsObj));
    console.log('Passion list updated!');
  }
};
