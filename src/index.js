import 'swiper/swiper-bundle.css';
import './styles/index.scss';
import Swiper from 'swiper';
import MicroModal from 'micromodal';

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
