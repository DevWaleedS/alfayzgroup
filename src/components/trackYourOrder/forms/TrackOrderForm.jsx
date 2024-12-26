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
		<div className='w-[796px] h-[280px] flex flex-col items-start gap-8 z-[2]'>
			<h3 className='headline-3-ar text-grayscale-600'>
				تتبع سيارتك من خلال رقم بوليصه الشحن...
			</h3>

			<div className='flex justify-end gap-[150px] '>
				<div className='flex items-end gap-2 '>
					<input
						type='radio'
						id='shippingNumber'
						name='trackingOption'
						value='shippingNumber'
						checked={selectedOption === "shippingNumber"}
						onChange={handleOptionChange}
						className='w-[20px] h-[20px] cursor-pointer accent-primary-600'
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
						className='w-[20px] h-[20px] cursor-pointer accent-primary-600'
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
				className='w-[796px] h-[95px] flex justify-between items-center py-[20px] px-[30px] bg-bg-light shadow-custom-shadow rounded-md'>
				<div className='w-[736px] h-[50px] flex justify-between items-center '>
					<input
						className='bg-bg-light text-primary-600 '
						type='text'
						placeholder={
							selectedOption === "shippingNumber"
								? " ادخل رقم بوليصة الشحن"
								: "ادخل رقم جوال المستلم"
						}
					/>
					<button className='w-[112px] h-[50px] bg-primary-700 rounded-[10px] py-[13px] px-[40px] text-lg font-bold leading-[25.6px] text-bg-light transition-colors hover:bg-primary-600 '>
						بحث
					</button>
				</div>
			</form>
		</div>
	);
};

export default TrackOrderForm;
