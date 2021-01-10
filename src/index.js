import 'swiper/swiper-bundle.css';
import './styles/index.scss';
import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
})
