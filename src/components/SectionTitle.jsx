import React from "react";
import { SectionTitleLeftLine, SectionTitleRightLine } from "../assets/icons";

const SectionTitle = ({ title, hasTowLines }) => {
	return (
		<div className='flex items-center justify-start gap-4'>
			{hasTowLines && <SectionTitleRightLine />}
			<span className='text-grayscale-500 text-lg leading-[22.4px] font-bold'>
				{title}
			</span>
			<SectionTitleLeftLine />
		</div>
	);
};

export default SectionTitle;
