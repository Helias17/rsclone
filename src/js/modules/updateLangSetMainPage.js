import MicroModal from 'micromodal';

const updateMainPage = (lang) => {
  const text = {
    ruLang: {
      language: 'Русский',
      title: 'Свайп вправо',
      loginButton: 'Войдите',
      registerButton: 'Создать аккаунт',
      downloadTitle: 'Скачайте приложение!',
      socialTitle: 'Тinder в социальных сетях',
      privacyButton: 'Настройки конфиденциальности',
      copyright: '© 2021 RSSchool. Все права защищены.',
      testimonialTitles: ['Лорен Деларменте', 'Габриель и невеста', 'Райан и Линдси Уолш', 'Лорен Деларменте', 'Габриель и невеста', 'Райан и Линдси Уолш', 'Лорен Деларменте', 'Габриель и невеста', 'Райан и Линдси Уолш'],
      testimonialTexts: [
        'Если ты проводишь время в одиночестве, да еще и интроверт (как я) — не бойся выйти из зоны комфорта. Ты точно найдешь своего человека. В Тиндере я встретила свою любовь и безмерно благодарна за это. ❤',
        'Мы познакомились в Тиндере во время самоизоляции. Она из Лафайетта в Индиане, а я из Кливленда, штат Огайо. И мы безумно любим друг друга.',
        '…недавно закончила токсичные отношения и создала аккаунт в Тиндере, чтобы развеять мысли и встретить кого-то нового. Мы переписывались в чате неделю и решили встретиться в баре, чтобы пообщаться вживую… В общем, 27 июня у нас свадьба.',
        'Если ты проводишь время в одиночестве, да еще и интроверт (как я) — не бойся выйти из зоны комфорта. Ты точно найдешь своего человека. В Тиндере я встретила свою любовь и безмерно благодарна за это. ❤',
        'Мы познакомились в Тиндере во время самоизоляции. Она из Лафайетта в Индиане, а я из Кливленда, штат Огайо. И мы безумно любим друг друга.',
        '…недавно закончила токсичные отношения и создала аккаунт в Тиндере, чтобы развеять мысли и встретить кого-то нового. Мы переписывались в чате неделю и решили встретиться в баре, чтобы пообщаться вживую… В общем, 27 июня у нас свадьба.',
        'Если ты проводишь время в одиночестве, да еще и интроверт (как я) — не бойся выйти из зоны комфорта. Ты точно найдешь своего человека. В Тиндере я встретила свою любовь и безмерно благодарна за это. ❤',
        'Мы познакомились в Тиндере во время самоизоляции. Она из Лафайетта в Индиане, а я из Кливленда, штат Огайо. И мы безумно любим друг друга.',
        '…недавно закончила токсичные отношения и создала аккаунт в Тиндере, чтобы развеять мысли и встретить кого-то нового. Мы переписывались в чате неделю и решили встретиться в баре, чтобы пообщаться вживую… В общем, 27 июня у нас свадьба.',
      ],
      navigationTitles: ['Компания', 'Сообщество', 'Партнёрство', 'Юридическая информация'],
      navigationLinks: [
        'Вакансии',
        'Контакты',
        'Безопасность',
        'Наши подписки',
        'Блог',
        'Технический блог',
        'Пресса',
        'Поддержка',
        'Промокод',
        'Hey! Vina',
        'Spotify',
        'Конфиденциальность',
        'Условия',
        'Политика в отношении файлов Cookie',
        'Центр по безопасности и разработке политик',
        'Советы по безопасности',
        'Правила сообщества',
        'Интеллектуальная собственность',
      ],
      descriptions: [
        'Внимание всем одиноким людям — на самом деле вы не одиноки! Если ты хочешь найти любовь, отношения или новых друзей, то тебе надо в Tinder. Здесь уже образовано более 55 миллиардов пар, а значит ты точно найдешь тех, кто тебе близок. Посмотрим правде в глаза — сейчас все знакомятся онлайн. Tinder — это самое популярное приложение, которым пользуются миллионы парней и девушек для знакомства и общения рядом. К тому же в Tinder рады всем, независимо от сексуальной ориентации и гендерной идентичности.',
        'В Tinder ты точно найдешь то, что ищешь. Хочешь новых отношений? Пожалуйста. Ищешь новых друзей? Без проблем. Ты учишься в универе и мечтаешь получить максимум от студенческой жизни? Для этого есть Tinder U. Tinder — это не просто сайт знакомств, а целая соцсеть, где самые разные люди со всего мира встречаются, заводят новых друзей и находят свою любовь.',
      ],
      modalTitles: [
        'Введите ваш email и пароль',
        'Введите ваши данные',
        'Русский',
      ],
      modalButtons: 'Продолжить',
      passwordInputs: 'Пароль',
      nameInput: 'Имя',
      gender: [
        'Мужчина',
        'Женщина',
        'Транс',
      ],
    },
    byLang: {
      language: 'Belarusian',
      title: 'Свайп направа',
      loginButton: 'Ўвайдзіце',
      registerButton: 'Cтварыць рахунак',
      downloadTitle: 'Запампуйце прыкладанне!',
      socialTitle: 'Тinder ў сацыяльных сетках',
      privacyButton: 'Налады прыватнасці',
      copyright: '© 2021 RSSchool. Ўсе правы абаронены.',
      testimonialTitles: ['Ларэн Деларменте', 'Габрыэль і нявеста', 'Раян і Ліндсі Уолш', 'Ларэн Деларменте', 'Габрыэль і нявеста', 'Раян і Ліндсі Уолш', 'Ларэн Деларменте', 'Габрыэль і нявеста', 'Раян і Ліндсі Уолш'],
      testimonialTexts: [
        'Калі ты праводзіш час у адзіноце, ды яшчэ і інтраверт (як я) - ня бойся выйсці з зоны камфорту. Ты дакладна знойдзеш свайго чалавека. У Тиндере я сустрэла сваё каханне і бязмерна ўдзячная за гэта. ❤ ',
        'Мы пазнаёміліся ў Тиндере падчас самаізаляцыі. Яна з Лафайетт ў Індзіану, а я з Кліўленда, штат Агаё. І мы вар\'яцка любім адзін аднаго.',
        '... нядаўна скончыла таксічныя адносіны і стварыла рахунак на Тиндере, каб развеяць думкі і сустрэць кагосьці новага. Мы перапісваліся у чаце тыдзень і вырашылі сустрэцца ў бары, каб пагутарыць ўжывую ... Увогуле, Чэрвень 27 ля нас вяселле.',
        'Калі ты праводзіш час у адзіноце, ды яшчэ і інтраверт (як я) - ня бойся выйсці з зоны камфорту. Ты дакладна знойдзеш свайго чалавека. У Тиндере я сустрэла сваё каханне і бязмерна ўдзячная за гэта. ❤ ',
        'Мы пазнаёміліся ў Тиндере падчас самаізаляцыі. Яна з Лафайетт ў Індзіану, а я з Кліўленда, штат Агаё. І мы вар\'яцка любім адзін аднаго.',
        '... нядаўна скончыла таксічныя адносіны і стварыла рахунак на Тиндере, каб развеяць думкі і сустрэць кагосьці новага. Мы перапісваліся у чаце тыдзень і вырашылі сустрэцца ў бары, каб пагутарыць ўжывую ... Увогуле, Чэрвень 27 ля нас вяселле.',
        'Калі ты праводзіш час у адзіноце, ды яшчэ і інтраверт (як я) - ня бойся выйсці з зоны камфорту. Ты дакладна знойдзеш свайго чалавека. У Тиндере я сустрэла сваё каханне і бязмерна ўдзячная за гэта. ❤ ',
        'Мы пазнаёміліся ў Тиндере падчас самаізаляцыі. Яна з Лафайетт ў Індзіану, а я з Кліўленда, штат Агаё. І мы вар\'яцка любім адзін аднаго.',
        '... нядаўна скончыла таксічныя адносіны і стварыла рахунак на Тиндере, каб развеяць думкі і сустрэць кагосьці новага. Мы перапісваліся у чаце тыдзень і вырашылі сустрэцца ў бары, каб пагутарыць ўжывую ... Увогуле, Чэрвень 27 ля нас вяселле.',
      ],
      navigationTitles: ['Кампанія', 'Супольнасць', 'Партнёрства', 'Юрыдычная інфармацыя'],
      navigationLinks: [
        'Вакансіі',
        'Кантакты',
        'Бяспека',
        'Нашы падпіскі',
        'Блог',
        'Тэхнічны блог',
        'Прэса',
        'Падтрымка',
        'Промокод',
        'Hey! Vina ',
        'Spotify',
        'Канфідэнцыяльнасць',
        'Умовы',
        'Палітыка ў дачыненні да файлаў Cookie',
        'Цэнтр па бяспецы і распрацоўцы палітык',
        'Саветы па бяспецы',
        'Правілы супольнасці',
        'Інтэлектуальная ўласнасць',
      ],
      descriptions: [
        'Увага ўсім адзінокім людзям - на самай справе вы не самотныя! Калі ты хочаш знайсці каханне, адносіны ці новых сяброў, то табе трэба ў Tinder. Тут ужо створана больш за 55 мільярдаў пар, а значыць ты дакладна знойдзеш тых, хто табе блізкі. Паглядзім праўдзе ў вочы - цяпер усё знаёмяцца анлайн. Tinder - гэта самае папулярнае прыкладанне, якім карыстаюцца мільёны хлопцаў і дзяўчат для знаёмства і зносін побач. Да таго ж у Tinder рады ўсім, незалежна ад сэксуальнай арыентацыі і гендэрнай ідэнтычнасці.',
        'У Tinder ты дакладна знойдзеш тое, што шукаеш. Хочаш новых адносін? Калі ласка. Шукаеш новых сяброў? Без праблем. Ты вучышся ва ўніверы і марыш атрымаць максімум ад студэнцкага жыцця? Для гэтага ёсць Tinder U. Tinder - гэта не проста сайт знаёмстваў, а цэлая соцсеть, дзе самыя розныя людзі з усяго свету сустракаюцца, заводзяць новых сяброў і знаходзяць сваё каханне. ',
      ],
      modalTitles: [
        'Пакіньце Ваш email і пароль',
        'Увядзіце вашыя дадзеныя',
        'Belarusian',
      ],
      modalButtons: 'Працягнуць',
      passwordInputs: 'Пароль',
      nameInput: 'Імя',
      gender: [
        'Мужчына',
        'Жанчына',
        'Транс',
      ],
    },
    engLang: {
      language: 'English',
      title: 'Swipe Right®',
      loginButton: 'Log in',
      registerButton: 'Create Account',
      downloadTitle: 'Get the app!',
      socialTitle: 'Stay Social',
      privacyButton: 'Privacy Settings',
      copyright: '© 2021 RSSchool. All Rights Reserved.',
      testimonialTitles: ['Lauren Delarmente', 'Gabriel & Fiance', 'Ryan and Lindsey Walsh', 'Lauren Delarmente', 'Gabriel & Fiance', 'Ryan and Lindsey Walsh', 'Lauren Delarmente', 'Gabriel & Fiance', 'Ryan and Lindsey Walsh'],
      testimonialTexts: [
        'For all the single people out there, especially introverted ones like us: do not be afraid to travel outside of your comfort zone. That’s where you’ll make a genuine connection. Tinder brought us together and for that, I am forever grateful. ❤',
        'I met my fiancé on tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.',
        '...just gotten out of a bad breakup and created a Tinder account to keep my mind off the breakup. After about a week of talking, we decided to meet up at a local bar for drinks...we decided to tie the knot in an 18 person ceremony in New Jersey on June 27th 2020.',
        'For all the single people out there, especially introverted ones like us: do not be afraid to travel outside of your comfort zone. That’s where you’ll make a genuine connection. Tinder brought us together and for that, I am forever grateful. ❤',
        'I met my fiancé on tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.',
        '...just gotten out of a bad breakup and created a Tinder account to keep my mind off the breakup. After about a week of talking, we decided to meet up at a local bar for drinks...we decided to tie the knot in an 18 person ceremony in New Jersey on June 27th 2020.',
        'For all the single people out there, especially introverted ones like us: do not be afraid to travel outside of your comfort zone. That’s where you’ll make a genuine connection. Tinder brought us together and for that, I am forever grateful. ❤',
        'I met my fiancé on tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.',
        '...just gotten out of a bad breakup and created a Tinder account to keep my mind off the breakup. After about a week of talking, we decided to meet up at a local bar for drinks...we decided to tie the knot in an 18 person ceremony in New Jersey on June 27th 2020.',
      ],
      navigationTitles: ['Company', 'Community', 'Partners', 'Legal'],
      navigationLinks: [
        'Jobs',
        'Contact',
        'Security',
        'Subscription Tiers',
        'Blog',
        'Tech Blog',
        'Press',
        'Support',
        'Promo Code',
        'Hey! Vina',
        'Spotify',
        'Privacy',
        'Terms',
        'Cookie Policy',
        'Safety & Policy Center',
        'Safety Tips',
        'Community Guidelines',
        'Intellectual Property',
      ],
      descriptions: [
        'Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.',
        'There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.',
      ],
      modalTitles: [
        'Enter your email and password',
        'Create Account',
        'English',
      ],
      modalButtons: 'Continue',
      passwordInputs: 'Password',
      nameInput: 'Name',
      gender: [
        'Male',
        'Female',
        'Transgender',
      ],
    },
  };

  const headerLangTitle = document.querySelector('.header__language-span');
  headerLangTitle.textContent = text[lang].language;

  const footerLangButton = document.querySelector('.settings-footer__language-button');
  footerLangButton.textContent = text[lang].language;

  const title = document.querySelector('.content__title');
  title.textContent = text[lang].title;

  const loginButton = document.querySelector('.header__login');
  loginButton.textContent = text[lang].loginButton;

  const registerButton = document.querySelector('.content__button-register');
  registerButton.textContent = text[lang].registerButton;

  const testimonialTitles = document.querySelectorAll('.testimonial__title');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  testimonialTitles.forEach((item, i) => item.textContent = text[lang].testimonialTitles[i]);

  const testimonialTexts = document.querySelectorAll('.testimonial__text');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  testimonialTexts.forEach((item, i) => item.textContent = text[lang].testimonialTexts[i]);

  const navigationTitles = document.querySelectorAll('.navigation__block-title');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  navigationTitles.forEach((item, i) => item.textContent = text[lang].navigationTitles[i]);

  const navigationLinks = document.querySelectorAll('.navigation__block-link');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  navigationLinks.forEach((item, i) => item.textContent = text[lang].navigationLinks[i]);

  const downloadTitle = document.querySelector('.download__title');
  downloadTitle.textContent = text[lang].downloadTitle;

  const socialTitle = document.querySelector('.social__title');
  socialTitle.textContent = text[lang].socialTitle;

  const descriptions = document.querySelectorAll('.description__text');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  descriptions.forEach((item, i) => item.textContent = text[lang].descriptions[i]);

  const privacyButton = document.querySelector('.settings-footer__privacy-button');
  privacyButton.textContent = text[lang].privacyButton;

  const copyright = document.querySelector('.copyright');
  copyright.textContent = text[lang].copyright;

  const modalTitles = document.querySelectorAll('.modal__title');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  modalTitles.forEach((item, i) => item.textContent = text[lang].modalTitles[i]);

  const modalButtons = document.querySelectorAll('.modal__btn-primary');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  modalButtons.forEach((item) => item.value = text[lang].modalButtons);

  const passwordInputs = document.querySelectorAll('.password__input');
  // eslint-disable-next-line no-param-reassign,no-return-assign
  passwordInputs.forEach((item) => item.placeholder = text[lang].passwordInputs);

  const nameInput = document.querySelector('.name__input');
  nameInput.placeholder = text[lang].nameInput;

  const gender = document.querySelector('.gender');
  // eslint-disable-next-line no-return-assign,no-param-reassign
  [...gender].forEach((item, i) => item.textContent = text[lang].gender[i]);
};

const updateLang = () => {
  let curLang = localStorage.getItem('curLang');
  curLang = curLang || 'ruLang';

  const languageButton = document.getElementById(curLang);
  languageButton.classList.add('selected');

  updateMainPage(curLang);

  const langButtons = document.querySelectorAll('.languages__button');

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      button.classList.add('selected');

      localStorage.setItem('curLang', button.id);
      curLang = button.id;

      updateMainPage(curLang);

      // close modal
      document.querySelectorAll('.modal__overlay')[2].click();
    });
  });
};

export default updateLang;
