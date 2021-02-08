export default class {
  constructor(slider, keyboard) {
    this.slider = slider;
    this.isInitialized = false;
    this.keyboardSupport = keyboard; // true, false
    this.activePhotoNum = 0;
    this.photosBox = slider.querySelector('.user-slider__photo-box');
    this.photos = [];
    this.arrowsBox = slider.querySelector('.user-slider__arrows');
    this.left = slider.querySelector('.user-slider__arrow-left');
    this.right = slider.querySelector('.user-slider__arrow-right');
    this.nav = slider.querySelector('.user-slider__nav');
  }

  addPhotos() {
    this.photosBox.innerHTML = '';

    this.photos.forEach((photoUrl, index) => {
      this.photosBox.innerHTML += `
      <div class="user-slider__photo ${index > 0 ? 'user-slider__photo_hidden' : ''}" 
      style="background-image: url('${photoUrl}');" 
      ></div>`;
    });
  }

  initKeyboard() {
    if (this.keyboardSupport) {
      document.addEventListener('keyup', (e) => {
        if (e.code === 'Space' && this.photos.length > 1) {
          if (this.activePhotoNum < this.photos.length - 1) {
            this.slidePhoto(this.activePhotoNum + 1);
          } else {
            this.slidePhoto(0);
          }
        }
      });
    }
  }

  initNavItems() {
    this.nav.addEventListener('click', (e) => {
      const clickedNav = e.target.closest('.user-slider__nav-item:not(.user-slider__nav-item_active)');

      if (clickedNav) {
        const activeNavItem = this.slider.querySelector('.user-slider__nav-item_active');
        activeNavItem.classList.remove('user-slider__nav-item_active');
        clickedNav.classList.add('user-slider__nav-item_active');
        this.slidePhoto(parseInt(clickedNav.dataset.num, 10));
      }
    });
  }

  createNav() {
    this.nav.innerHTML = '';

    // show navigation items, if slider has more than 1 photo
    if (this.photos.length > 1) {
      this.photos.forEach((photo, index) => {
        this.nav.innerHTML += `
        <div class="user-slider__nav-item 
        ${index === 0 ? 'user-slider__nav-item_active' : ''}
        " data-num="${index}"></div>`;
      });
    }
  }

  updateNavActiveItem() {
    const navItems = this.slider.querySelectorAll('.user-slider__nav-item');

    navItems.forEach((navItem) => {
      navItem.classList.remove('user-slider__nav-item_active');
    });
    navItems[this.activePhotoNum].classList.add('user-slider__nav-item_active');
  }

  slidePhoto(num) {
    const photosEl = this.slider.querySelectorAll('.user-slider__photo');

    // first fo all hide all photos
    photosEl.forEach((item) => {
      const photo = item;
      photo.classList.add('user-slider__photo_hidden');
    });

    // show photo
    photosEl[num].classList.remove('user-slider__photo_hidden');

    this.activePhotoNum = num;
    this.updateNavActiveItem();
  }

  updateArrowsDisplay() {
    // show arrows, if slider has more than 1 photo
    if (this.photos.length > 1) {
      this.arrowsBox.classList.remove('user-slider__arrows_hidden');
    } else {
      this.arrowsBox.classList.add('user-slider__arrows_hidden');
    }
  }

  addArrowsListeners() {
    this.left.addEventListener('click', () => {
      if (this.activePhotoNum - 1 >= 0) {
        this.slidePhoto(this.activePhotoNum - 1);
      }
    });

    this.right.addEventListener('click', () => {
      if (this.activePhotoNum + 1 < this.photos.length) {
        this.slidePhoto(this.activePhotoNum + 1);
      }
    });
  }

  init(photos) {
    this.photos = photos;

    // if slider was already started only change photos and nav items
    if (this.isInitialized) {
      this.activePhotoNum = 0;
      this.addPhotos();
      this.createNav();
      this.updateArrowsDisplay();
      return false;
    }
    // first slider start
    this.addPhotos();
    this.createNav();
    this.initNavItems();
    this.addArrowsListeners();
    this.updateArrowsDisplay();
    this.initKeyboard();
    this.isInitialized = true;
    return false;
  }
}
