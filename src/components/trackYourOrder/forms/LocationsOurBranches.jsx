import React from "react";

const LocationsOurBranches = () => {
	const handleOnSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<div className='w-[1102px] h-[280px] flex flex-col items-start gap-8 z-[2]'>
			<h3 className='headline-3-ar text-grayscale-600'>
				اكتشف أقرب فرع إليك...
			</h3>

			<div className='flex items-baseline justify-center gap-[13px] '>
				<span className='w-[12px] h-[12px] bg-primary-700 rounded-full'></span>
				<span className='text-grayscale-500 headline-4-ar !font-bold'>
					أدخل مدينتك أو محافظتك وسنعرض لك أقرب فرع لخدمتك.
				</span>
			</div>

			<form
				onSubmit={handleOnSubmit}
				className='w-[796px] h-[95px] flex justify-between items-center py-[20px] px-[30px] bg-bg-light shadow-custom-shadow rounded-md'>
				<div className='w-[736px] h-[50px] flex justify-between items-center '>
					<input
						type='text'
						className='bg-bg-light text-primary-600 '
						placeholder='أدخل مدينتك او محافظتك'
					/>
					<button className='w-[183px] h-[50px] bg-primary-700 rounded-[10px] py-[13px] px-[40px] text-lg font-bold leading-[25.6px] text-bg-light transition-colors hover:bg-primary-600 '>
						ابحث عن فرعنا
					</button>
				</div>
			</form>
		</div>
	);
};

export default LocationsOurBranches;
