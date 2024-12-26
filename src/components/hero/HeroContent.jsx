import React from "react";
import Button from "../button/Button";
import { HeroRightLine } from "../../assets/icons";

const HeroContent = () => {
	return (
		<main className=' container'>
			<section className='relative w-[706px] mt-[240px] mr-8  flex flex-col items-start gap-[30px]'>
				<div className='headline-3-ar text-bg-light'>
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
				<HeroRightLine className='absolute -right-8 top-4' />
			</section>
		</main>
	);
};

export default HeroContent;
