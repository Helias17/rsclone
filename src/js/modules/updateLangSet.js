const updateInnerInterface = (lang) => {
  const text = {
    ruLang: {
      profileTitle: 'Мой профиль',
      matchesTab: 'Пары',
      messagesTab: 'Сообщения',
      settingsTitles: [
        'настройки аккаунта',
        'настройки находок',
        'уведомления',
        'язык',
        'помощь и поддержка',
        'юридическая информация',
      ],
      settingsItems: [
        'Управление платежами',
        'Адрес эл. почты',
        'Место',
        'Максимальное расстояние',
        'Интересуют',
        'Возрастной диапазон',
        'Глобальный',
        'Показывать меня в Tinder',
        'Адрес эл. почты',
        'Языковые настройки',
        'Русский',
        'Форма обратной связи',
        'Политика в отношении файлов Cookie',
        'Условия обслуживания',
        'Выйти',
        'Удалить аккаунт',
        null,
        'Мужчины',
        'Женщины',
        'Трансы',
        'Всех',
        'Новые пары',
        'Сообщения',
        'Промо-акции',
        'Английский',
        'Belarusian',
        'Русский',
      ],
      creditCardInputs: [
        'Имя владельца карты',
        'Номер карты',
        'ММ/ГГ',
        'CVC-код',
      ],
      creditCardButton: 'Сохранить',
      // emailStatus: 'Адрес эл. почты не подтвержден',
      // sliderDistanceValue: 'км',
      // genderNotice: 'Вы будете видеть в Находках только женщин.',
      settingsDescriptions: [
        'Когда местные профили закончатся, вы сможете перейти в Глобальный режим для знакомств с людьми со всего мира.',
        'Пока эта функция отключена, вас не будут видеть другие пользователи. Но вы всё равно сможете смотреть свои пары и общаться с ними.',
        'Адрес эл. почты не подтвержден',
        'Вы будете видеть в Находках только женщин.',
        'Гибкие настройки позволят вам контролировать входящую корреспонденцию по своему усмотрению. Вы также всегда можете отписаться по специальной ссылке внизу каждого письма.',
      ],
      feedbackSelectValues: [
        'Тема',
        'Предложение',
        'Запрос',
        'Вопрос',
      ],
      feedbackTextArea: 'Ваше сообщение',
      sendFeedbackButton: 'Отправить',
      lookingRadioButtons: [
        'Мужчины',
        'Женщины',
        'Всех',
      ],
      editProfileButton: 'Изменить',
      editProfileTitles: [
        'О пользователе',
        'Интересы',
        'Место проживания',
        'Пол',
      ],
      editProfileGenders: [
        'Мужчина',
        'Женщина',
        'Транс',
      ],
      profileSaveButton: 'Сохранить',
      profileCancelButton: 'Отмена',
      panelHideButton: 'Скрыть',
      panelButtons: [
        'нет',
        'лайк',
        'открыть профиль',
        'закрыть профиль',
        'супер лайк',
        'следующее фото',
      ],
    },
    byLang: {
      profileTitle: 'Мой профіль',
      matchesTab: 'Пары',
      messagesTab: 'Паведамлення',
      settingsTitles: [
        'Налады акаўнта',
        'Налады знаходак',
        'Апавяшчэння',
        'Мова',
        'Дапамога і падтрымка',
        'Юрыдычная інфармацыя',
      ],
      settingsItems: [
        'Упраўленне плацяжамі',
        'Адрас эл. пошты ',
        'Месца',
        'Максімальная адлегласць',
        'Цікавяць',
        'Узроставы дыяпазон',
        'Глабальны',
        'Паказваць мяне ў Tinder',
        'Адрас эл. пошты ',
        'Моўныя налады',
        'Рускі',
        'Форма зваротнай сувязі',
        'Палітыка ў дачыненні да файлаў Cookie',
        'Умовы абслугоўвання',
        'Выйсьці',
        'Выдаліць рахунак',
        null,
        'Мужчыны',
        'Жанчыны',
        'Транс',
        'Усіх',
        'Новыя пары',
        'Паведамленні',
        'Прома-акцыі',
        'Англійская',
        'Belarusian',
        'Рускі',
      ],
      creditCardInputs: [
        'Імя ўладальніка карты',
        'Нумар карты',
        'ММ/ГГ',
        'CVC-код',
      ],
      creditCardButton: 'Захаваць',
      settingsDescriptions: [
        'Калі мясцовыя профілі скончацца, вы зможаце перайсці ў Глабальны рэжым для знаёмстваў з людзьмі з усяго свету.',
        'Пакуль гэтая функцыя адключаная, вас не будуць бачыць іншыя карыстальнікі. Але вы ўсё роўна зможаце глядзець свае пары і мець зносіны з імі.',
        'Адрас эл. пошты не пацверджаны ',
        'Вы будзеце бачыць у знаходцы толькі жанчын.',
        'Гнуткія налады дазволяць вам кантраляваць уваходную карэспандэнцыю па сваім меркаванні. Вы таксама заўсёды можаце адпісацца па спецыяльнай спасылцы ўнізе кожнага ліста.',
      ],
      feedbackSelectValues: [
        'Тэма',
        'Прапанова',
        'Запыт',
        'Пытанне',
      ],
      feedbackTextArea: 'Ваша паведамленне',
      sendFeedbackButton: 'Адправіць',
      lookingRadioButtons: [
        'Мужчыны',
        'Жанчыны',
        'Усіх',
      ],
      editProfileButton: 'Змяніць',
      editProfileTitles: [
        'Аб карыстальніку',
        'Інтарэсы',
        'Месца пражывання',
        'Пол',
      ],
      editProfileGenders: [
        'Мужчына',
        'Жанчына',
        'Транс',
      ],
      profileSaveButton: 'Захаваць',
      profileCancelButton: 'Адмена',
      panelHideButton: 'Схаваць',
      panelButtons: [
        'Няма',
        'Лайк',
        'Адкрыць профіль',
        'Зачыніць профіль',
        'Супер лайк',
        'Наступнае фота',
      ],
    },
    engLang: {
      profileTitle: 'My profile',
      matchesTab: 'Matches',
      messagesTab: 'Messages',
      settingsTitles: [
        'account settings',
        'discovery settings',
        'notifications',
        'language',
        'Help and support',
        'Legal',
      ],
      settingsItems: [
        'Manage payment account',
        'Email',
        'Location',
        'Maximum distance',
        'Looking for',
        'Age range',
        'Global',
        'Show me on Tinder',
        'Email',
        'Language',
        'Russian',
        'Feedback form',
        'Cookie policy',
        'Terms of service',
        'Logout',
        'Delete account',
        null,
        'Men',
        'Women',
        'Trans',
        'Everyone',
        'New matches',
        'Messages',
        'Promotions',
        'English',
        'Belarusian',
        'Russian',
      ],
      creditCardInputs: [
        'Cardholder name',
        'Card number',
        'MM/YY',
        'CVC',
      ],
      creditCardButton: 'Save',
      // emailStatus: 'Email unverified (check your inbox)',
      // sliderDistanceValue: 'km',
      // genderNotice: 'You will only see women in the discovery.',
      settingsDescriptions: [
        'Going global will allow you to see people from around the world after you’ve run out of profiles nearby.',
        'While turned off, you will not be shown in the card stack. You can still see and chat with your matches.',
        'Email unverified (check your inbox)',
        'You will only see women in the discovery.',
        'Control the emails you want to get — all of them, just the important stuff, or the bare minimum. You can always unsubscribe from the bottom of any email.',
      ],
      feedbackSelectValues: [
        'Topic',
        'Proposal',
        'Claim',
        'Question',
      ],
      feedbackTextArea: 'Your message',
      sendFeedbackButton: 'Send',
      lookingRadioButtons: [
        'Men',
        'Women',
        'Everyone',
      ],
      editProfileButton: 'Edit',
      editProfileTitles: [
        'About',
        'Passions',
        'City',
        'Gender',
      ],
      editProfileGenders: [
        'Men',
        'Woman',
        'Trans',
      ],
      profileSaveButton: 'Save',
      profileCancelButton: 'Cancel',
      panelHideButton: 'Hide',
      panelButtons: [
        'dislike',
        'like',
        'open profile',
        'close profile',
        'super like',
        'next photo',
      ],
    },
  };

  const profileTitle = document.querySelector('.profile-header__title');
  profileTitle.textContent = text[lang].profileTitle;

  const matchesTab = document.getElementById('matchesTab');
  matchesTab.firstChild.textContent = text[lang].matchesTab;

  const messagesTab = document.getElementById('messagesTab');
  messagesTab.firstChild.textContent = text[lang].messagesTab;

  const settingsTitles = document.querySelectorAll('.settings__title');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  settingsTitles.forEach((item, i) => item.textContent = text[lang].settingsTitles[i]);

  const settingsItems = document.querySelectorAll('.settings__item-name');
  settingsItems.forEach((item, i) => {
    // eslint-disable-next-line no-param-reassign
    if (item) item.textContent = text[lang].settingsItems[i];
  });

  const creditCardInputs = document.querySelectorAll('.credit-card__input');
  // eslint-disable-next-line no-return-assign,no-param-reassign
  creditCardInputs.forEach((item, i) => item.placeholder = text[lang].creditCardInputs[i]);

  const creditCardButton = document.querySelector('.credit-card__btn');
  creditCardButton.textContent = text[lang].creditCardButton;

  // const emailStatus = document.getElementById('userEmailStatusNote');
  // emailStatus.textContent = text[lang].emailStatus;

  // const sliderDistanceValue = document.getElementById('sliderDistanceValue');
  // sliderDistanceValue.textContent = text[lang].sliderDistanceValue;

  // const genderNotice = document.getElementById('genderNotice');
  // genderNotice.textContent = text[lang].genderNotice;

  const settingsDescriptions = document.querySelectorAll('.settings__item-desc');
  // eslint-disable-next-line no-return-assign,no-param-reassign
  settingsDescriptions.forEach((item, i) => item.textContent = text[lang].settingsDescriptions[i]);

  const feedbackSelectValues = document.querySelector('.feedback__select');
  // eslint-disable-next-line max-len,no-return-assign,no-param-reassign
  [...feedbackSelectValues].forEach((item, i) => item.textContent = text[lang].feedbackSelectValues[i]);

  const feedbackTextArea = document.querySelector('.feedback__textarea');
  feedbackTextArea.placeholder = text[lang].feedbackTextArea;

  const sendFeedbackButton = document.querySelector('.btn_center');
  sendFeedbackButton.textContent = text[lang].sendFeedbackButton;

  const lookingRadioButtons = document.querySelectorAll('input[name="looking"]');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  lookingRadioButtons.forEach((item, i) => item.dataset.text = text[lang].lookingRadioButtons[i]);

  const editProfileButton = document.getElementById('btnEditProfile');
  editProfileButton.textContent = text[lang].editProfileButton;

  const editProfileTitles = document.querySelectorAll('.editcard__title');
  // eslint-disable-next-line no-return-assign,no-param-reassign
  editProfileTitles.forEach((item, i) => item.textContent = text[lang].editProfileTitles[i]);

  const editProfileGenders = document.querySelectorAll('.editcard__item-name');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  editProfileGenders.forEach((item, i) => item.textContent = text[lang].editProfileGenders[i]);

  const profileSaveButton = document.getElementById('btnSaveEditProfile');
  profileSaveButton.textContent = text[lang].profileSaveButton;

  const profileCancelButton = document.getElementById('btnCancelEditProfile');
  profileCancelButton.textContent = text[lang].profileCancelButton;

  const panelHideButton = document.querySelector('.keys-panel__btn');
  panelHideButton.textContent = text[lang].panelHideButton;

  const panelButtons = document.querySelectorAll('.keys-panel__item');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  panelButtons.forEach((item, i) => item.textContent = text[lang].panelButtons[i]);
};

export default () => {
  let curLang = localStorage.getItem('curLang');
  const langMenuTitle = document.getElementById('langMenuTitle');

  curLang = curLang || 'engLang';

  const curLangRadio = document.getElementById(curLang);
  curLangRadio.checked = true;
  langMenuTitle.textContent = curLangRadio.value;

  updateInnerInterface(curLang);

  const langRadioAll = document.querySelectorAll('input[name="lang"]');

  langRadioAll.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      localStorage.setItem('curLang', e.target.id);
      langMenuTitle.textContent = e.target.value;

      updateInnerInterface(e.target.id);
    });
  });
};
