import renderUserInfo from './renderUserInfo';
import initSettingsSliders from './initSettingsSliders';
import initToggleProfileSettings from './initToggleProfileSettings';
import initMatchesMessagesTabs from './initMatchesMessagesTabs';
import initMessageSelect from './initMessageSelect';
import initShowSettingsNested from './initShowSettingsNested';
import initShowSettingsGenderNotice from './initShowSettingsGenderNotice';
import updateLangSet from './updateLangSet';
import UserSlider from './UserSlider';
import initShowHideUserCardInfo from './initShowHideUserCardInfo';
import initShowHideKeyPanel from './initShowHideKeyPanel';
import initShowHideMessenger from './initShowHideMessenger';
import initMobileHeaderMenu from './initMobileHeaderMenu';
import initShowHideMatchUsercardMobile from './initShowHideMatchUsercardMobile';
import initShowHideProfileEditor from './initShowHideProfileEditor';
import initShowHideSettingsMobile from './initShowHideSettingsMobile';
import initLogout from './initLogout';
import initSettingsChangeWatch from './initSettingsChangeWatch';
import initEditUserCard from './initEditUserCard';
import updatePassionsList from './updatePassionsList';
import initPassionsEditWatch from './initPassionsEditWatch';
import getPosition from './getPosition';
import getCityName from './getCityName';
import setCity from './setCity';

export default () => {
  renderUserInfo();
  initSettingsSliders();
  initSettingsChangeWatch();
  initEditUserCard();
  initPassionsEditWatch();
  updatePassionsList();
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
  initShowHideProfileEditor();
  initShowHideSettingsMobile();
  initLogout();

  getPosition()
    .then((coords) => getCityName(coords.latitude, coords.longitude))
    .then((city) => setCity(city));

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
};
