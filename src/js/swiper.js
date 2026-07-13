import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

let howSwiper = null;

function initHowSwiper() {
  if (window.innerWidth < 1440) {
    if (!howSwiper) {
      howSwiper = new Swiper('.how-swiper', {
        modules: [Autoplay],

        slidesPerView: 'auto',
        spaceBetween: 16,

        loop: true,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      });
    }
  } else {
    if (howSwiper) {
      howSwiper.destroy(true, true);
      howSwiper = null;
    }
  }
}

initHowSwiper();

window.addEventListener('resize', initHowSwiper);