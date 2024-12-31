import React from "react";
import Button from "../button/Button";
import { HeroRightLine } from "../../assets/icons";

const HeroContent = () => {
	return (
		<main className='container'>
			<section className='relative md:w-[706px] w-[95%] md:mt-[240px] mt-2 md:mr-8 mr-2 flex flex-col items-start md:gap-[30px] gap-3 '>
				<div className='headline-3-ar  text-bg-light'>
					حياكم اللَّه في <span className='text-primary-700'>الفايز جروب</span>
				</div>
				<h1 className='headline-1-ar text-bg-light text-right'>
					الكفاءة تلتقي <br />
					بالموثوقية في نقل السيارات
				</h1>
				<p className='b1-ar text-right text-bg-darken'>
					في شركة الفايز، نضع السلامة والكفاءة والاحترافية في كل خطوة على رأس
					أولوياتنا. فمن الاستلام إلى التسليم، يتم التعامل مع رحلة سيارتك بدقة
					وعناية، مما يضمن تجربة سلسة وخالية من القلق في كل مرة.
				</p>

				<Button icon={true}>معرفة المزيد</Button>
				<HeroRightLine className='absolute md:-right-8 -right-5 md:top-4 top-2 h-52 md:h-auto ' />
			</section>
		</main>
	);
};

export default HeroContent;
