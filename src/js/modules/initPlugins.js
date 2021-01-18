import Swiper from 'swiper';
import MicroModal from 'micromodal';

export const initPlugins = () => {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
    });

    MicroModal.init({
        disableScroll: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true,
    });
};
