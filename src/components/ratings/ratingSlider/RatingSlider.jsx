import React, { useRef, useState } from "react";
import RatingSliderBox from "./RatingSliderBox";

import { RatingImage, RatingStar } from "../../../assets/icons";
import ArrowButtonsRatingSlider from "./ArrowButtonsRatingSlider";

const sliders = [
	{
		id: 1,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
	{
		id: 2,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
	{
		id: 3,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
	{
		id: 4,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
	{
		id: 5,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
	{
		id: 6,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
	{
		id: 7,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
	{
		id: 8,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
	{
		id: 9,
		title: "تحديث الجدول الزمني - شبكة التجارة بين آسيا والولايات المتحدة",
		image: <RatingImage />,
		ratingIcon: <RatingStar />,
		category: "تحديث الخدمة، خدمات التجارة",
		date: "6/23/2022",
		description:
			'"كانت تجربتي مع مجموعة الفايز ممتازة! كان فريقهم محترفًا وسريع الاستجابة وقام بتسليم سيارتي في الوقت المحدد......',
	},
];

const RatingSlider = () => {
	const swiperRef = useRef(null);
	const [isEnd, setIsEnd] = useState(false);
	const [isBeginning, setIsBeginning] = useState(true);

	return (
		<section className=' h-[380px] relative'>
			<RatingSliderBox
				sliders={sliders}
				swiperRef={swiperRef}
				setIsBeginning={setIsBeginning}
				setIsEnd={setIsEnd}
			/>
			<ArrowButtonsRatingSlider
				isEnd={isEnd}
				swiperRef={swiperRef}
				addLineBetweenArrows={false}
				isBeginning={isBeginning}
			/>
		</section>
	);
};

export default RatingSlider;
