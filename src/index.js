import './styles/index.scss';

import initToggleProfileSettings from './js/modules/initToggleProfileSettings';
import initMatchesMessagesTabs from './js/modules/initMatchesMessagesTabs';
import initMessageSelect from './js/modules/initMessageSelect';
import initShowSettingsNested from './js/modules/initShowSettingsNested';
import initShowSettingsGenderNotice from './js/modules/initShowSettingsGenderNotice';
import updateLangSet from './js/modules/updateLangSet';
import UserSlider from './js/modules/UserSlider';
import initShowHideUserCardInfo from './js/modules/initShowHideUserCardInfo';
import initShowHideKeyPanel from './js/modules/initShowHideKeyPanel';

initToggleProfileSettings();
initMatchesMessagesTabs();
initMessageSelect();
initShowSettingsNested();
initShowSettingsGenderNotice();
updateLangSet();
initShowHideUserCardInfo();
initShowHideKeyPanel();

const photos = [
  'http://rustartup.com/tinder/images/users/user4-1.jpg',
  'http://rustartup.com/tinder/images/users/user4-2.jpg',
  'http://rustartup.com/tinder/images/users/user4-3.jpg',
  'http://rustartup.com/tinder/images/users/user4-4.jpg',
];

/*
const photos2 = [
  'http://rustartup.com/tinder/images/users/user2-1.jpg',
  'http://rustartup.com/tinder/images/users/user2-2.jpg',
  'http://rustartup.com/tinder/images/users/user2-3.jpg',
  'http://rustartup.com/tinder/images/users/user2-4.jpg',
  'http://rustartup.com/tinder/images/users/user2-5.jpg',
];
 */

const slider = new UserSlider(document.getElementById('mainUserCard'));
slider.init(photos);
