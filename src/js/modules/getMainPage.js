const getMainPage = () => `
        <div class="first-screen">
            <header class="header">
                <div class="logo-wrapper">
                    <svg class="header__logo" viewBox="0 0 519 123">
                        <g fill="none" fill-rule="evenodd">
                            <title>Tinder</title>
                            <path d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z" fill="#fff"></path>
                            <path d="M171.2 101.1l1.7-2 5.3 16.8-.7.7c-4 3.7-10 5.6-17.7 5.6h-.3c-7 0-12.5-2-16.3-5.7-3.8-3.8-5.8-9.5-5.8-16.7V54h-13.5V35.5h13.5V13.2h20.8v22.3h16.5V54h-16.6v41.3c0 1.9.5 8 6.3 8 3 0 5.8-1.1 6.8-2.3zm11 19.2V35.6H203v84.7h-20.8zM192.5 1A12.5 12.5 0 1 1 180 13.6C180 6.8 185.7 1 192.5 1zm66.4 32.5c18 0 27.9 9.8 27.9 27.7v59H266V66.2c-.4-9.6-5-14-14.8-14-8.8 0-15.9 5.4-19.5 10v58h-20.8V35.7h20.8v9c6-5.8 15.6-11 27.2-11zM356 44.4V4.6h20.8v115.8H356v-8.8a34.3 34.3 0 0 1-24.7 10.7c-22.7 0-37.9-17.8-37.9-44.3 0-26.6 15.2-44.4 37.9-44.4A34 34 0 0 1 356 44.4zm0 17.9a25.6 25.6 0 0 0-19.6-10c-12.9 0-21.5 10.3-21.5 25.7 0 15.3 8.6 25.6 21.5 25.6 7.5 0 15.7-4 19.6-9.8V62.3zm69.4-28.7c24.6 0 41.7 19 41.7 46v5.7h-62.9c2.1 11.9 11.5 19.5 24.3 19.5 8.1 0 17-3.5 22.1-8.6L452 95l9.9 14.2-1 .9a48.6 48.6 0 0 1-34.1 12.2c-26 0-44.3-18.3-44.3-44.4a42.8 42.8 0 0 1 43-44.3zm-21.3 36h42.7c-1.2-12.7-11.7-18.5-21.4-18.5-14.6 0-20.1 11-21.3 18.6zm113.3-36h1.5v21l-1.8-.3c-1.5-.3-3.4-.5-5.3-.5-6.7 0-16 4.7-19.5 9.7v56.7h-20.8V35.6h20.9V45c6.9-7.2 16-11.4 25-11.4z" fill="#fff"></path>
                        </g>
                    </svg>
                </div>
                <div class="header__buttons">
                    <button class="header__language" title="Язык" aria-label="русский" lang="ru"  data-micromodal-trigger="modal-3">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true" role="presentation">
                            <path fill="" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                            </path>
                        </svg>
                        <span class="header__language-span">Русский</span>
                    </button>
                    <button class="header__login" type="button" data-micromodal-trigger="modal-1">ВОЙДИТЕ</button>
                </div>
            </header>
            <main class="main">
                <div class="background"></div>
                <div class="overlay"></div>
                <div class="content">
                    <h1 class="content__title">Свайп вправо</h1>
                    <button class="content__button-register" type="button" data-micromodal-trigger="modal-2">СОЗДАТЬ АККАУНТ</button>
                    <button class="content__button-login" type="button" data-micromodal-trigger="modal-1">ВОЙДИТЕ</button>
                </div>
            </main>
        </div>
        <div class="testimonials swiper-container">
            <ul class="testimonials__list swiper-wrapper">
                <li class="testimonials__item swiper-slide">
                    <figure class="testimonial">
                        <span class="testimonial__symbol">“</span>
                        <figcaption class="testimonial__title">Лорен Деларменте</figcaption>
                        <hr>
                        <p class="testimonial__text">Если ты проводишь время в одиночестве, да еще и интроверт (как я) — не бойся выйти из зоны комфорта.
                            Ты точно найдешь своего человека. В Тиндере я встретила свою любовь и безмерно благодарна за это. ❤
                        </p>
                    </figure>
                </li>
                <li class="testimonials__item swiper-slide">
                    <figure class="testimonial">
                        <span class="testimonial__symbol">“</span>
                        <figcaption class="testimonial__title">Габриель и невеста</figcaption>
                        <hr>
                        <p class="testimonial__text">Мы познакомились в Тиндере во время самоизоляции. Она из Лафайетта в Индиане, а я из Кливленда, штат Огайо.
                            И мы безумно любим друг друга.
                        </p>
                    </figure>
                </li>
                <li class="testimonials__item swiper-slide">
                    <figure class="testimonial">
                        <span class="testimonial__symbol">“</span>
                        <figcaption class="testimonial__title">Райан и Линдси Уолш</figcaption>
                        <hr>
                        <p class="testimonial__text">…недавно закончила токсичные отношения и создала аккаунт в Тиндере,
                            чтобы развеять мысли и встретить кого-то нового.
                            Мы переписывались в чате неделю и решили встретиться в баре, чтобы пообщаться вживую…
                            В общем, 27 июня у нас свадьба.</p>
                    </figure>
                </li>
            </ul>
        </div>
        
        <footer class="footer">
            <nav class="navigation">
                <section class="navigation__block">
                    <h2 class="navigation__block-title">Компания</h2>
                    <ul>
                        <li><a class="navigation__block-link" href="#">Вакансии</a></li>
                        <li><a class="navigation__block-link" href="#">Контакты</a></li>
                        <li><a class="navigation__block-link" href="#">Безопасность</a></li>
                        <li><a class="navigation__block-link" href="#">Наши подписки</a></li>
                    </ul>
                </section>
                <section class="navigation__block">
                    <h2 class="navigation__block-title">Сообщество</h2>
                    <ul>
                        <li><a class="navigation__block-link" href="#">Блог</a></li>
                        <li><a class="navigation__block-link" href="#">Технический блог</a></li>
                        <li><a class="navigation__block-link" href="#">Пресса</a></li>
                        <li><a class="navigation__block-link" href="#">Поддержка</a></li>
                        <li><a class="navigation__block-link" href="#">Промокод</a></li>
                    </ul>
                </section>
                <section class="navigation__block">
                    <h2 class="navigation__block-title">Партнёрство</h2>
                    <ul>
                        <li><a class="navigation__block-link" href="#">Hey! Vina</a></li>
                        <li><a class="navigation__block-link" href="#">Spotify</a></li>
                    </ul>
                </section>
                <section class="navigation__block">
                    <h2 class="navigation__block-title">Юридическая информация</h2>
                    <ul>
                        <li><a class="navigation__block-link" href="#">Конфиденциальность</a></li>
                        <li><a class="navigation__block-link" href="#">Условия</a></li>
                        <li><a class="navigation__block-link" href="#">Политика в отношении файлов Cookie</a></li>
                        <li><a class="navigation__block-link" href="#">Центр по безопасности и разработке политик</a></li>
                        <li><a class="navigation__block-link" href="#">Советы по безопасности</a></li>
                        <li><a class="navigation__block-link" href="#">Правила сообщества</a></li>
                        <li><a class="navigation__block-link" href="#">Интеллектуальная собственность</a></li>
                    </ul>
                </section>
            </nav>
            <div class="links">
                <div class="download">
                    <h2 class="download__title">Скачайте приложение!</h2>
                    <div class="download__links">
                        <a class="download__apple-icon" href="#"></a>
                        <a class="download__android-icon" href="#"></a>
                    </div>
                </div>
                <div class="social">
                    <h2 class="social__title">Тinder в социальных сетях</h2>
                    <ul class="social__list">
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 24 24" width="42px" height="42px" focusable="false" aria-hidden="true" role="presentation">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M11.82 2a9.82 9.82 0 1 1 0 19.65 9.82 9.82 0 0 1 0-19.65zm4.3 12.16V9.48c0-1.08-.88-1.95-1.96-1.95H9.48c-1.08 0-1.95.87-1.95 1.95v4.68c0 1.08.87 1.96 1.95 1.96h4.68c1.09 0 1.96-.88 1.96-1.96z"
                                              fill="#fd5068">
                                        </path>
                                        <path d="M11.85 9.7a2.16 2.16 0 1 0 0 4.31 2.16 2.16 0 0 0 0-4.3z"
                                              stroke="#fd5068">
                                        </path>
                                        <path d="M14.32 8.56a.63.63 0 0 0-.45 1.07c.12.12.28.19.45.19.16 0 .32-.07.44-.19a.63.63 0 0 0 0-.88.63.63 0 0 0-.44-.19z"
                                              fill="#fd5068">
                                        </path>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 24 24" width="42px" height="42px" focusable="false" aria-hidden="true" role="presentation">
                                    <path d="M12 2C6.478 2 2 6.478 2 12c0 5.524 4.478 10 10 10s10-4.476 10-10c0-5.522-4.478-10-10-10zm-.941 8.938v-.39a2.877 2.877 0 00-.41-.035 3.031 3.031 0 00-1.737 5.52 3.028 3.028 0 012.147-5.095zm.073 4.414a1.386 1.386 0 001.383-1.325V7.418h1.207A2.265 2.265 0 0113.687 7h-1.651v6.602a1.386 1.386 0 01-1.383 1.335 1.405 1.405 0 01-.639-.16c.26.36.675.573 1.118.575zm4.845-5.691v-.368c-.444 0-.878-.13-1.248-.377a2.29 2.29 0 001.248.745zm-1.248-.745a2.274 2.274 0 01-.566-1.5h-.44c.115.617.478 1.16 1.006 1.5zm-4.08 3.249a1.386 1.386 0 00-.638 2.612 1.383 1.383 0 011.53-2.13v-1.68a2.9 2.9 0 00-.409-.032h-.073v1.278a1.421 1.421 0 00-.41-.048zm5.328-2.504v1.277a3.92 3.92 0 01-2.29-.744v3.357a3.038 3.038 0 01-3.037 3.031 3.006 3.006 0 01-1.738-.55 3.031 3.031 0 005.251-2.063v-3.347c.669.48 1.471.736 2.294.735V9.712c-.161 0-.322-.018-.48-.051zm-2.29 3.89v-3.357a3.92 3.92 0 002.294.735V9.65a2.29 2.29 0 01-1.252-.735 2.287 2.287 0 01-1.007-1.5h-1.207v6.61a1.386 1.386 0 01-2.507.758 1.386 1.386 0 01.639-2.613c.138.001.276.023.408.064v-1.278a3.028 3.028 0 00-2.146 5.11 3.006 3.006 0 001.74.515 3.038 3.038 0 003.038-3.031z"
                                          fill="#fd5068" fill-rule="evenodd">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 24 24" width="42px" height="42px" focusable="false" aria-hidden="true" role="presentation">
                                    <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm4.3 6.42c-.88-.24-4.43-.24-4.43-.24s-3.55 0-4.44.24c-.49.13-.87.52-1 1-.24.9-.24 2.76-.24 2.76s0 1.86.24 2.75c.13.5.51.88 1 1.01.89.24 4.44.24 4.44.24s3.55 0 4.43-.24c.5-.13.88-.52 1-1.01.24-.9.24-2.75.24-2.75s0-1.86-.23-2.75c-.13-.5-.52-.88-1-1.01zm-5.67 1.98l2.97 1.69-2.97 1.69V10.4z"
                                          fill="#fd5068">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 24 24" width="42px" height="42px" focusable="false" aria-hidden="true" role="presentation">
                                    <path d="M15.98 9.96v.27a5.8 5.8 0 0 1-5.83 5.83A5.8 5.8 0 0 1 7 15.14a4.2 4.2 0 0 0 3.04-.85 2.05 2.05 0 0 1-1.92-1.42c.3.06.63.04.93-.04a2.05 2.05 0 0 1-1.65-2v-.03c.29.15.6.24.93.25a2.05 2.05 0 0 1-.63-2.74 5.82 5.82 0 0 0 4.23 2.15 2.05 2.05 0 0 1 3.5-1.88c.45-.09.9-.25 1.3-.5-.16.48-.48.89-.9 1.14.4-.05.8-.16 1.17-.32-.28.41-.62.77-1.02 1.06zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
                                          fill="#fd5068">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 24 24" width="42px" height="42px" focusable="false" aria-hidden="true" role="presentation">
                                    <path fill="#fd5068"
                                          d="M14.54 12h-1.4v5h-2.07v-5h-1v-1.76h1V9.1c0-.82.38-2.1 2.1-2.1h1.53v1.72h-1.12c-.18 0-.44.1-.44.48v1.04h1.59L14.54 12zM12.4 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="description">
                <p class="description__text">Внимание всем одиноким людям — на самом деле вы не одиноки! Если ты хочешь найти любовь, отношения или новых друзей,
                    то тебе надо в Tinder. Здесь уже образовано более 55 миллиардов пар, а значит ты точно найдешь тех, кто тебе близок.
                    Посмотрим правде в глаза — сейчас все знакомятся онлайн. Tinder — это самое популярное приложение,
                    которым пользуются миллионы парней и девушек для знакомства и общения рядом. К тому же в Tinder рады всем,
                    независимо от сексуальной ориентации и гендерной идентичности.</p>
                <p class="description__text">В Tinder ты точно найдешь то, что ищешь. Хочешь новых отношений? Пожалуйста. Ищешь новых друзей? Без проблем.
                    Ты учишься в универе и мечтаешь получить максимум от студенческой жизни? Для этого есть Tinder U.
                    Tinder — это не просто сайт знакомств, а целая соцсеть, где самые разные люди со всего мира встречаются,
                    заводят новых друзей и находят свою любовь.</p>
            </div>
            <div class="settings-footer-wrapper">
                <div class="settings-footer">
                    <div class="settings-footer__privacy">
                        <button class="settings-footer__privacy-button">Настройки конфиденциальности</button>
                    </div>
                    <span class="settings-footer__divider">|</span>
                    <div class="settings-footer__language">
                        <button class="settings-footer__language-button" title="Язык" aria-label="русский" lang="ru" data-micromodal-trigger="modal-3">Русский</button>
                    </div>
                </div>
                <span class="copyright">© 2021 RSSchool. Все права защищены.</span>
            </div>
        </footer>
        
        <div class="modal micromodal-slide" id="modal-1" aria-hidden="false">
            <div class="modal__overlay" tabindex="-1" data-micromodal-close>
                <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                    <header class="modal__header">
                        <h3 id="modal-1-title"></h3>
                        <svg class="logo__svg" viewBox="0 0 24 24" width="24px" height="24px" focusable="false" role="presentation">
                            <path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z" fill="#fd5068" fill-rule="nonzero">
        
                            </path>
                        </svg>
                        <button class="modal__close" aria-label="Close modal" data-micromodal-close>
                            <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true" role="presentation">
                                <path d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <h3 class="modal__title">Введите ваш email и пароль</h3>
                    <form id="login-form">
                        <div class="modal__content" id="modal-1-content">
                            <div class="measure">
                                <span class="modal__error-login"></span>
                                <label for="email" class="email__label"></label>
                                <input id="email" name="email" class="email__input" type="email" required="" placeholder="Email">
                                <label for="password" class="password__label"></label>
                                <input id="password" name="password" class="password__input" type="password" required="" placeholder="Password">
                            </div>
                        </div>
                        <footer class="modal__footer">
                            <input type="submit" class="modal__btn modal__btn-primary" value="Продолжить">
                        </footer>
                    </form>
                </div>
            </div>
        </div>
        
        <div class="modal micromodal-slide" id="modal-2" aria-hidden="false">
            <div class="modal__overlay" tabindex="-1" data-micromodal-close>
                <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-2-title">
                    <header class="modal__header">
                        <h3 id="modal-2-title"></h3>
                        <svg class="logo__svg" viewBox="0 0 24 24" width="24px" height="24px" focusable="false" role="presentation">
                            <path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z" fill="#fd5068" fill-rule="nonzero">
        
                            </path>
                        </svg>
                        <button class="modal__close" aria-label="Close modal" data-micromodal-close>
                            <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true" role="presentation">
                                <path d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <h3 class="modal__title">Введите ваши данные</h3>
                    <form id="register-form" action="/">
                        <div class="modal__content" id="modal-2-content">
                            <div class="measure">
                                <span class="modal__error-registration"></span>
                                <label for="email" class="email__label"></label>
                                <input name="email" class="email__input" type="email" maxlength="20" placeholder="Email" required>
                                <label for="password" class="password__label"></label>
                                <input name="password" class="password__input" type="password" maxlength="30" placeholder="Password" required>
                                <input name="name" class="name__input" type="text" maxlength="40" placeholder="Name" required>
                                <input name="birth" class="birth__input" type="date" required>
                                <select name="gender_id" class="gender">
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                    <option value="2">Transgender</option>
                                </select>
                            </div>
                        </div>
                        <footer class="modal__footer">
                            <input type="submit" class="modal__btn modal__btn-primary" value="Продолжить">
                        </footer>
                    </form>
                </div>
            </div>
        </div>
        
        <div class="modal micromodal-slide" id="modal-3" aria-hidden="false">
            <div class="modal__overlay" tabindex="-1" data-micromodal-close>
                <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-3-title">
                    <header class="modal__header">
                        <h3 id="modal-3-title"></h3>
                        <svg class="logo__svg" viewBox="0 0 24 24" width="24px" height="24px" focusable="false" role="presentation">
                            <path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z" fill="#fd5068" fill-rule="nonzero">
        
                            </path>
                        </svg>
                        <button class="modal__close" aria-label="Close modal" data-micromodal-close>
                            <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true" role="presentation">
                                <path d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <h3 class="modal__title languages__title">Русский</h3>
                    <hr>
                    <div class="modal__content" id="modal-3-content">
                        <ul class="languages">
                            <li class="languages__item">
                                <button class="languages__button" id="engLang" aria-label="английский" aria-selected="false" lang="en">
                                    <span class="languages__desc-en">English</span>
                                    <span class="languages__desc-ru">английский</span>
                                </button>
                            </li>
                            <li class="languages__item selected">
                                <button class="languages__button" id="ruLang" aria-label="русский" aria-selected="true" lang="ru">
                                    <span class="languages__desc-en">Russian</span>
                                    <span class="languages__desc-ru">русский</span>
                                </button>
                            </li>
                            <li class="languages__item">
                                <button class="languages__button" id="esLang" aria-label="испанский" aria-selected="false" lang="es">
                                    <span class="languages__desc-en">Español</span>
                                    <span class="languages__desc-ru">испанский</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <footer class="modal__footer">
                    </footer>
                </div>
            </div>
        </div>
    `;

export default getMainPage;
