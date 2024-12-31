import React, { useRef, useState } from "react";
import HeroSlider from "./heroSlider/HeroSlider";
import ArrowsButtons from "./heroSlider/ArrowsButtons";
import CustomPagination from "./heroSlider/CustomPagination";
import SocialLinks from "../socialLinks/SocialLinks";
import "./heroSlider/HeroSlider.css";

import { hero } from "../../assets/images";

const sliders = [
	{
		id: 1,
		image: hero,
	},
	{
		id: 2,
		image: hero,
	},
	{
		id: 3,
		image: hero,
	},
	{
		id: 4,
		image: hero,
	},
];

const Hero = () => {
	const swiperRef = useRef(null);
	const [isEnd, setIsEnd] = useState(false);
	const [isBeginning, setIsBeginning] = useState(true);

	return (
		<div className='relative w-full md:h-[1200px] h-full overflow-hidden z-10 '>
			<ArrowsButtons
				isEnd={isEnd}
				swiperRef={swiperRef}
				isBeginning={isBeginning}
			/>
			<HeroSlider
				isEnd={isEnd}
				sliders={sliders}
				setIsEnd={setIsEnd}
				swiperRef={swiperRef}
				isBeginning={isBeginning}
				setIsBeginning={setIsBeginning}
			/>

			<SocialLinks position='md:left-10 left-20  2xl:top-[14rem] xl:top-[12rem] top-[2rem] z-10' />

			<CustomPagination />
		</div>
	);
};

export default Hero;
