import Swiper, { Navigation, Pagination, Autoplay, EffectFade  } from 'swiper/core';

// Install modules
Swiper.use([Navigation, Pagination, Autoplay, EffectFade ]);

// import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


class BuildSwiper {
	constructor(swiperName, ObjOptions) {
		this.swiper = new Swiper(swiperName, ObjOptions);
	}
}


export default BuildSwiper