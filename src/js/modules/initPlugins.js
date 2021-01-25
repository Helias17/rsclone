import Swiper from 'swiper';
import MicroModal from 'micromodal';

const closeModals = (modal) => {
  // const modalsId = ['modal-', 2, 3];
  // modalsId.filter((id) => id !== modal.id).forEach((id) => {
  //   console.log(id);
  //   MicroModal.close(`modal-${id}`);
  // });
  console.info(`${modal.id} is shown`);
};

const initPlugins = () => {
  const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });

  MicroModal.init({
    onShow: closeModals,
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
  });
};

export default initPlugins;
