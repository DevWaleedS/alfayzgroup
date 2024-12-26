import React from "react";
import { MoreArrow } from "../../assets/icons";

const Button = ({ icon, className = "", onClick, children }) => {
	return (
		<button
			className={`${className} min-w-[180px] min-h-[50px] flex items-end justify-center gap-[10px] py-[13px] px-[26px] bg-primary-700 hover:bg-primary-700 transition-colors delay-100 ease-in-out `}
			onClick={onClick}>
			<span className='text-lg font-bold leading-[25.6px] text-bg-light '>
				{children}
			</span>
			{icon && <MoreArrow />}
		</button>
	);
};

export default Button;
