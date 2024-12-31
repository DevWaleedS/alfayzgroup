import React from "react";

const LocationsOurBranches = () => {
	const handleOnSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<div className='md:w-[1102px] w-full  flex flex-col items-start gap-8 z-[2]'>
			<h3 className='headline-3-ar text-grayscale-600'>
				اكتشف أقرب فرع إليك...
			</h3>

			<div className='flex items-baseline justify-center gap-[13px] '>
				<span className='md:w-[12px] md:h-[12px] w-[10px] h-[10px] bg-primary-700 rounded-full'></span>
				<span className='text-grayscale-500 headline-4-ar !font-bold'>
					أدخل مدينتك أو محافظتك وسنعرض لك أقرب فرع لخدمتك.
				</span>
			</div>

			<form
				onSubmit={handleOnSubmit}
				className='md:w-[796px] w-full md:h-[95px] h-14 flex justify-between items-center py-[20px] px-[30px] bg-bg-light shadow-custom-shadow rounded-md'>
				<div className='md:w-[736px] w-full md:h-[50px] h-14 flex justify-between items-center '>
					<input
						type='text'
						className='bg-bg-light text-primary-600 '
						placeholder='أدخل مدينتك او محافظتك'
					/>
					<button className='w-[183px] md:h-[50px] h-12 bg-primary-700 rounded-[10px] md:py-[13px] py-1 md:px-[40px] px-2 text-lg font-bold leading-[25.6px] text-bg-light transition-colors hover:bg-primary-600 text-center mr-auto'>
						ابحث عن فرعنا
					</button>
				</div>
			</form>
		</div>
	);
};

export default LocationsOurBranches;
