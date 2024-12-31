import React from "react";

const ContactInput = ({ type, placeholder, icon }) => {
	return (
		<div
			className={`w-full flex ${
				type === "textarea"
					? "md:h-[149px] h-[130px] resize-none items-start"
					: "md:h-[70px] h-14 items-center"
			} group hover:border-b-primary-600 transition-colors delay-100 ease-in-out md:rounded-[10px] rounded-md md:py-[20px] py-4 pr-[20px] md:gap-3 gap-2 border border-b-grayscale-100 shadow-inner-custom`}>
			{icon}
			{type === "textarea" ? (
				<textarea
					className='w-full h-full text-right bg-inherit text-lg font-bold leading-[22.4px]  group-hover:text-primary-600 group-hover:placeholder:text-primary-600 focus:text-primary-600 text-primary-600'
					placeholder={placeholder}
				/>
			) : (
				<input
					className='w-full h-full text-right bg-inherit text-lg font-bold leading-[22.4px]  group-hover:text-primary-600 group-hover:placeholder:text-primary-600 focus:text-primary-600 text-primary-600'
					type={type}
					placeholder={placeholder}
				/>
			)}
		</div>
	);
};

export default ContactInput;
