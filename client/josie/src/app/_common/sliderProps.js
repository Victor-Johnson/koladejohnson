import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Parallax,
  FreeMode,
} from "swiper";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
  Parallax,
  FreeMode,
]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderProps = {
  milPortfolioSlider: {
    parallax: true,
    autoHeight: true,
    slidesPerView: 1,
    speed: 800,
    pagination: {
        el: ".mil-swiper-pagination",
        type: "fraction",
    },
    on: {
        slideChangeTransitionEnd: function () {
            ScrollTrigger.refresh();
        }
    }
  },
  milBlogSlider: {
    parallax: true,
    autoHeight: true,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 800,
    pagination: {
        el: ".mil-swiper-pagination-2",
        type: "fraction",
    },
    on: {
        slideChangeTransitionEnd: function () {
            ScrollTrigger.refresh();
        }
    }
  }
};
