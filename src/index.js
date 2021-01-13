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
import initShowHideMessenger from './js/modules/initShowHideMessenger';
import initMobileHeaderMenu from './js/modules/initMobileHeaderMenu';
import initShowHideMatchUsercardMobile from './js/modules/initShowHideMatchUsercardMobile';

initToggleProfileSettings();
initMatchesMessagesTabs();
initMessageSelect();
initShowSettingsNested();
initShowSettingsGenderNotice();
updateLangSet();
initShowHideUserCardInfo();
initShowHideKeyPanel();
initShowHideMessenger();
initMobileHeaderMenu();
initShowHideMatchUsercardMobile();

const photos = [
  'http://rustartup.com/tinder/images/users/user4-1.jpg',
  'http://rustartup.com/tinder/images/users/user4-2.jpg',
  'http://rustartup.com/tinder/images/users/user4-3.jpg',
  'http://rustartup.com/tinder/images/users/user4-4.jpg',
];

const photos2 = [
  'http://rustartup.com/tinder/images/users/user2-1.jpg',
  'http://rustartup.com/tinder/images/users/user2-2.jpg',
  'http://rustartup.com/tinder/images/users/user2-3.jpg',
  'http://rustartup.com/tinder/images/users/user2-4.jpg',
  'http://rustartup.com/tinder/images/users/user2-5.jpg',
];

const photos3 = [
  'http://rustartup.com/tinder/images/users/user1-1.jpg',
];

const slider = new UserSlider(document.getElementById('mainUserCard'));
slider.init(photos);

const slider2 = new UserSlider(document.getElementById('matchUserCard'));
slider2.init(photos2);

const slider3 = new UserSlider(document.getElementById('profileUserCard'));
slider3.init(photos3);
