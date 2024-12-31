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

import "./RatingSlider.css";

import { Calendar, Vector25 } from "../../../assets/icons";
import SectionParagraph from "../../SectionParagraph";
import Button from "../../button/Button";

const RatingSliderBox = ({ sliders, swiperRef, setIsBeginning, setIsEnd }) => {
	return (
		<Swiper
			className='w-full h-[344px] '
			onBeforeInit={(swiper) => {
				swiperRef.current = swiper;
			}}
			onSlideChange={(swiper) => {
				setIsEnd(swiper.isEnd);
				setIsBeginning(swiper.isBeginning);
			}}
			pagination={{
				el: ".rating-pagination",
				clickable: true,
			}}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			breakpoints={{
				320: {
					slidesPerView: 1.2,
					spaceBetween: 15,
				},

				768: {
					slidesPerView: 1.2,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
			}}
			centeredSlides={false}
			loop={true}
			freeMode={true}
			modules={[Navigation, Pagination, Autoplay, FreeMode]}>
			{sliders.map((slider) => (
				<SwiperSlide
					className='md:w-[547px] w-full h-full  bg-bg-light md:rounded-[20px] rounded-lg md:p-[30px] p-4 shadow-aboutUs-shadow'
					key={slider.id}>
					<div className='md:w-[487px] w-full md:h-[284px] h-full flex flex-col items-start md:gap-[20px] gap-3'>
						<div className='w-full flex items-center gap-[21px] '>
							{slider.image}
							<div className='w-[378px] flex flex-col items-start gap-3'>
								<h5 className=' headline-5-ar text-grayscale-600'>
									{slider.title}
								</h5>
								<div>{slider.ratingIcon}</div>
							</div>
						</div>
						<div className='w-full border-[1px] border-grayscale-100'></div>

						<div className='w-full flex justify-between items-center'>
							<div className='flex gap-3 items-center'>
								<Vector25 className='h-5' />
								<SectionParagraph paragraph={slider.category} />
							</div>

							<div className='flex gap-4 items-center'>
								<Calendar />
								<SectionParagraph paragraph={slider.date} />
							</div>
						</div>
						<SectionParagraph
							align={"items-start"}
							paragraph={slider.description}
						/>
						<Button className='w-[180px] rounded-[10px] py-[13px] px-[40px] mr-auto'>
							قراءة المزيد
						</Button>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default RatingSliderBox;
