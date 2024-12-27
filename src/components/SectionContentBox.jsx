import React from "react";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SectionHeadLin from "./SectionHeadLin";
import Button from "./button/Button";

const SectionContentBox = ({ title, headline, paragraph, buttonText }) => {
	return (
		<div className='w-full flex justify-between items-center mb-[50px]'>
			<div className='w-[516px] flex flex-col items-start gap-3'>
				<SectionTitle title={title} />
				<SectionHeadLin>{headline}</SectionHeadLin>
				<SectionParagraph paragraph={paragraph} />
			</div>
			<Button className='rounded-[10px]'>{buttonText}</Button>
		</div>
	);
};

export default SectionContentBox;
