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
import sliders from './sliders';
import renderUserLikeCard from './renderUserLikeCard';
import initLikeDislike from './initLikeDislike';
import renderMatches from './renderMatches';

export default () => {
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
  initLikeDislike();
  renderMatches();

  getPosition()
    .then((coords) => getCityName(coords.latitude, coords.longitude))
    .then((city) => setCity(city));

  sliders.likeCard = new UserSlider(document.getElementById('mainUserCard'), true);
  renderUserLikeCard();

  sliders.userCard = new UserSlider(document.getElementById('profileUserCard'), false);
  renderUserInfo();

  const photos2 = [
    'http://rustartup.com/tinder/images/users/user2-1.jpg',
    'http://rustartup.com/tinder/images/users/user2-2.jpg',
    'http://rustartup.com/tinder/images/users/user2-3.jpg',
    'http://rustartup.com/tinder/images/users/user2-4.jpg',
    'http://rustartup.com/tinder/images/users/user2-5.jpg',
  ];

  const slider2 = new UserSlider(document.getElementById('matchUserCard'), false);
  slider2.init(photos2);
};
