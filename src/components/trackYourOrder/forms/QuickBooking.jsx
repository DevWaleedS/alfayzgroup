import React from "react";
import { Calendar, Car, Exchange, Vector7 } from "../../../assets/icons";

const QuickBooking = () => {
	const handleOnSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className='md:w-[1102px] w-full md:h-[432px] h-[622px]  flex flex-col items-start gap-8 z-[2]'>
			<h3 className='headline-3-ar text-grayscale-600'>
				ابدأ رحلة الحجز بسهولة..
			</h3>

			<form
				onSubmit={handleOnSubmit}
				className='w-full h-full flex flex-col items-start gap-8'>
				<div className='md:w-[994.62px] w-full md:flex hidden md:items-center items-start justify-between  '>
					<div className='flex items-center md:gap-[20px] gap-2'>
						<div className='flex items-baseline justify-center gap-[13px] '>
							<span className='md:w-[12px] md:h-[12px] w-[10px] h-[10px] bg-primary-700 rounded-full'></span>
							<span className='text-primary-700 headline-4-ar !font-bold'>
								من الموقع
							</span>
						</div>

						<Vector7 />
					</div>

					<div className='flex md:items-center md:flex-row flex-col items-start md:gap-[200px] gap-8'>
						<div className='flex items-baseline justify-center gap-[13px] '>
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
					<div className='flex md:hidden items-center gap-10'>
						<div className='flex items-center md:gap-[20px] gap-2'>
							<div className='flex items-baseline justify-center gap-[13px] '>
								<span className='md:w-[12px] md:h-[12px] w-[10px] h-[10px] bg-primary-700 rounded-full'></span>
								<span className='text-primary-700 headline-4-ar !font-bold'>
									من الموقع
								</span>
							</div>

							<Vector7 className='w-16' />
						</div>
						<div className='flex items-baseline justify-center gap-[13px] '>
							<span className='text-grayscale-500 headline-4-ar'>الى موقع</span>
						</div>
					</div>

					<div className='md:w-[940px] w-full  flex md:flex-row flex-col justify-between items-center md:gap-[50px] gap-7'>
						<input
							type='text'
							placeholder='من موقع'
							className='w-[400px] md:h-[50px] h-12 border-2 border-primary-700 text-primary-700 py-[20px] px-[30px] bg-bg-light placeholder:text-primary-700 text-base font-medium leading-[23.52px]'
						/>

						<Exchange className='rotate-90 ' />

						<input
							type='text'
							placeholder='الى موقع'
							className='w-[400px] md:h-[50px] h-12 text-grayscale-400 py-[20px] px-[30px] bg-bg-light shadow-custom-shadow placeholder:text-grayscale-400 text-base font-medium leading-[23.52px]'
						/>
					</div>

					<div className='w-full md:h-[50px] h-12 flex md:flex-row flex-col md:items-center items-start md:gap-[140px] gap-2'>
						<div className='flex md:hidden items-center justify-center gap-[13px]'>
							<Car />
							<span className='text-grayscale-500 headline-4-ar'>
								نوع سيارتك
							</span>
						</div>

						<input
							type='text'
							placeholder='نوع سيارتك'
							className='md:w-[400px] w-full h-full text-grayscale-400 py-[20px] md:px-[30px] px-[20px] bg-bg-light shadow-custom-shadow placeholder:text-grayscale-400 text-base font-medium leading-[23.52px]'
						/>

						<div className='md:w-[562px] w-full flex md:flex-row flex-col md:items-center items-start md:gap-[50px] gap-2'>
							<div className='flex md:hidden items-baseline justify-center gap-[13px] '>
								<Calendar />
								<span className='text-grayscale-500 headline-4-ar'>
									التاريخ
								</span>
							</div>
							<input
								type='date'
								className='md:w-[400px] w-full md:h-[50px] h-12 text-grayscale-400 py-[20px] px-[30px] bg-bg-light shadow-custom-shadow placeholder:text-grayscale-400 text-base font-medium leading-[23.52px]'
							/>
							<button className='md:w-[112px] w-full md:h-[50px] h-12 text-center bg-primary-700 rounded-[10px] md:py-[13px] py-1 px-[40px] text-lg font-bold leading-[25.6px] text-bg-light transition-colors hover:bg-primary-600 '>
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
