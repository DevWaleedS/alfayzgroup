import React from "react";
import { SectionTitleLeftLine } from "../assets/icons";

const SectionTitle = ({ title }) => {
	return (
		<div className='flex items-center justify-start gap-4'>
			<span className='text-grayscale-500 text-lg leading-[22.4px] font-bold'>
				{title}
			</span>
			<SectionTitleLeftLine />
		</div>
	);
};

export default SectionTitle;
