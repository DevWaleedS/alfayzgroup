import React from "react";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SectionHeadLin from "./SectionHeadLin";
import Button from "./button/Button";

const SectionContentBox = ({
	className,
	title,
	headline,
	paragraph,
	buttonText,
	hasTowLines,
	hideBtn,
	align = "items-start",
	width = "w-[516px]",
}) => {
	return (
		<div
			className={`w-full ${className} flex justify-between items-center mb-[50px] `}>
			<div className={`${width} flex flex-col ${align} gap-3`}>
				<SectionTitle title={title} hasTowLines={hasTowLines} />
				<SectionHeadLin>{headline}</SectionHeadLin>
				<SectionParagraph paragraph={paragraph} align={align} />
			</div>
			{!hideBtn && <Button className='rounded-[10px]'>{buttonText}</Button>}
		</div>
	);
};

export default SectionContentBox;
