import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import HeroContent from "../HeroContent";

const HeroSlider = ({ sliders, swiperRef, setIsBeginning, setIsEnd }) => {
	return (
		<Swiper
			onBeforeInit={(swiper) => {
				swiperRef.current = swiper;
			}}
			onSlideChange={(swiper) => {
				setIsEnd(swiper.isEnd);
				setIsBeginning(swiper.isBeginning);
			}}
			pagination={{
				el: ".custom-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					const bulletNumber = index + 1;
					const formattedNumber =
						bulletNumber < 10 ? `0${bulletNumber}` : bulletNumber;
					return `<span class="${className}" data-number="${formattedNumber}"></span>`;
				},
			}}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			loop={true}
			freeMode={true}
			modules={[Navigation, Pagination, Autoplay, FreeMode]}
			className='relative w-full h-full'>
			{sliders.map((slider) => (
				<SwiperSlide
					className='w-full h-full bg-top bg-no-repeat bg-contain'
					style={{ backgroundImage: `url(${slider.image})` }}
					key={slider.id}>
					<HeroContent />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSlider;
