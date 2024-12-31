import React from "react";
import { MoreArrow } from "../../assets/icons";

const Button = ({ icon, className = "", onClick, children }) => {
	return (
		<button
			className={`${className} md:min-w-[180px] min-w-[120px] md:min-h-[50px] min-h-[44px] flex items-center justify-center gap-[10px] md:py-[13px] py-[5px] md:px-[26px] px-[16px] bg-primary-700 hover:bg-primary-700 transition-colors delay-100 ease-in-out `}
			onClick={onClick}>
			<span className='md:text-lg text-md  md:font-bold font-medium leading-[25.6px] text-bg-light '>
				{children}
			</span>
			{icon && <MoreArrow />}
		</button>
	);
};

export default Button;
