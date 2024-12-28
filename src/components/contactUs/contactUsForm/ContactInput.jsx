import React from "react";

const ContactInput = ({ type, placeholder, icon }) => {
	return (
		<div
			className={`w-full flex ${
				type === "textarea"
					? "h-[149px] resize-none items-start"
					: "h-[70px] items-center"
			} group hover:border-b-primary-600 transition-colors delay-100 ease-in-out rounded-[10px] py-[20px] pr-[20px] gap-3 border border-b-grayscale-100 shadow-inner-custom`}>
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
