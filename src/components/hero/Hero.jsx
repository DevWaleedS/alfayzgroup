import React, { useRef, useState } from "react";
import HeroSlider from "./heroSlider/HeroSlider";
import ArrowsButtons from "./heroSlider/ArrowsButtons";
import CustomPagination from "./heroSlider/CustomPagination";
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
		<div className='relative w-full h-[1200px] overflow-hidden'>
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

			<CustomPagination />
		</div>
	);
};

export default Hero;
