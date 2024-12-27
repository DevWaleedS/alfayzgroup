import React, { useState } from "react";
import {
	Calendar,
	Car,
	Exchange,
	Vector,
	Vector7,
} from "../../../assets/icons";

const QuickBooking = () => {
	const handleOnSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className='w-[1102px] h-[280px] flex flex-col items-start gap-8 z-[2]'>
			<h3 className='headline-3-ar text-grayscale-600'>
				ابدأ رحلة الحجز بسهولة..
			</h3>

			<form
				onSubmit={handleOnSubmit}
				className='w-full h-full flex flex-col items-start gap-8'>
				<div className='w-[994.62px] h-[34] flex items-center justify-between '>
					<div className='flex items-center gap-[20px]'>
						<div className='flex items-baseline justify-center gap-[13px] '>
							<span className='w-[12px] h-[12px] bg-primary-700 rounded-full'></span>
							<span className='text-primary-700 headline-4-ar !font-bold'>
								من الموقع
							</span>
						</div>

						<Vector7 />
					</div>

					<div className='flex items-center gap-[200px]'>
						<div className='flex items-baseline justify-center gap-[13px] '>
							<Vector />
							<span className='text-grayscale-500 headline-4-ar'>الى موقع</span>
						</div>
						<div className='flex items-center justify-center gap-[13px] '>
							<Car />
							<span className='text-grayscale-500 headline-4-ar'>
								نوع سيارتك
							</span>
						</div>
						<div className='flex items-baseline justify-center gap-[13px] '>
							<Calendar />
							<span className='text-grayscale-500 headline-4-ar'>التاريخ</span>
						</div>
					</div>
				</div>
				<section className='w-full flex flex-col items-start gap-4'>
					<div className='w-[940px] h-[50px] flex justify-between items-center gap-[50px]'>
						<input
							type='text'
							placeholder='من موقع'
							className='w-[400px] h-full border-2 border-primary-700 text-primary-700 py-[20px] px-[30px] bg-bg-light placeholder:text-primary-700 text-base font-medium leading-[23.52px]'
						/>

						<Exchange />

						<input
							type='text'
							placeholder='الى موقع'
							className='w-[400px] h-full text-grayscale-400 py-[20px] px-[30px] bg-bg-light shadow-custom-shadow placeholder:text-grayscale-400 text-base font-medium leading-[23.52px]'
						/>
					</div>

					<div className='w-full h-[50px] flex  items-center gap-[140px]'>
						<input
							type='text'
							placeholder='نوع سيارتك'
							className='w-[400px] h-full text-grayscale-400 py-[20px] px-[30px] bg-bg-light shadow-custom-shadow placeholder:text-grayscale-400 text-base font-medium leading-[23.52px]'
						/>

						<div className='w-[562px] flex items-center gap-[50px]'>
							<input
								type='date'
								placeholder='نوع سيارتك'
								className='w-[400px] h-[50px] text-grayscale-400 py-[20px] px-[30px] bg-bg-light shadow-custom-shadow placeholder:text-grayscale-400 text-base font-medium leading-[23.52px]'
							/>
							<button className='w-[112px] h-[50px] bg-primary-700 rounded-[10px] py-[13px] px-[40px] text-lg font-bold leading-[25.6px] text-bg-light transition-colors hover:bg-primary-600 '>
								بحث
							</button>
						</div>
					</div>
				</section>
			</form>
		</div>
	);
};

export default QuickBooking;
