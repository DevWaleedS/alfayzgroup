import React from "react";
import { SectionTitleLeftLine, SectionTitleRightLine } from "../assets/icons";
import Button from "./button/Button";

const SectionTitle = ({
	title,
	hasTowLines,
	hideBtn,
	buttonText,
	justify = "justify-between",
}) => {
	return (
		<div className={`w-full flex ${justify}`}>
			<div className='flex items-center justify-start gap-4'>
				{hasTowLines && <SectionTitleRightLine />}
				<span className='text-grayscale-500 text-lg leading-[22.4px] font-bold'>
					{title}
				</span>
				<SectionTitleLeftLine />
			</div>
			{!hideBtn && (
				<Button className='rounded-[10px] md:hidden flex'>{buttonText}</Button>
			)}
		</div>
	);
};

export default SectionTitle;
