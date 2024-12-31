import React, { useState } from "react";

const TrackOrderForm = () => {
	const [selectedOption, setSelectedOption] = useState("shippingNumber");

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className='w-full  flex flex-col items-start md:gap-8 gap-4 z-[2]'>
			<h3 className='headline-3-ar text-grayscale-600'>
				تتبع سيارتك من خلال رقم بوليصه الشحن...
			</h3>

			<div className='flex md:flex-row flex-col justify-end md:gap-[150px] gap-4 '>
				<div className='flex items-end gap-2 '>
					<input
						type='radio'
						id='shippingNumber'
						name='trackingOption'
						value='shippingNumber'
						checked={selectedOption === "shippingNumber"}
						onChange={handleOptionChange}
						className='md:w-[20px] md:h-[20px] w-4 h-4 cursor-pointer accent-primary-600'
					/>
					<label
						htmlFor='shippingNumber'
						className='headline-4-ar text-primary-600 cursor-pointer'>
						رقم بوليصة الشحن
					</label>
				</div>

				<div className='flex items-end gap-2'>
					<input
						type='radio'
						id='receiverPhone'
						name='trackingOption'
						value='receiverPhone'
						checked={selectedOption === "receiverPhone"}
						onChange={handleOptionChange}
						className='md:w-[20px] md:h-[20px] w-4 h-4 cursor-pointer accent-primary-600'
					/>
					<label
						htmlFor='receiverPhone'
						className=' headline-4-ar text-primary-600 cursor-pointer'>
						رقم جوال المستلم
					</label>
				</div>
			</div>

			<form
				onSubmit={handleOnSubmit}
				className='md:w-[796px] w-full md:h-[95px] h-14 flex justify-between items-center py-[20px] px-[30px] bg-bg-light shadow-custom-shadow rounded-md'>
				<div className='md:w-[736px] w-full md:h-[50px] h-10 flex justify-between items-center '>
					<input
						className='bg-bg-light text-primary-600 '
						type='text'
						placeholder={
							selectedOption === "shippingNumber"
								? " ادخل رقم بوليصة الشحن"
								: "ادخل رقم جوال المستلم"
						}
					/>
					<button className='w-[112px] md:h-[50px] h-10 bg-primary-700 rounded-[10px] md:py-[13px] py-1 md:px-[40px] px-8 text-lg font-bold leading-[25.6px] text-bg-light transition-colors hover:bg-primary-600 '>
						بحث
					</button>
				</div>
			</form>
		</div>
	);
};

export default TrackOrderForm;
