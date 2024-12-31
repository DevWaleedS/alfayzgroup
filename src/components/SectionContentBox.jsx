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
	justify,
	align = "items-start",
	width = "md:w-[516px] w-full",
}) => {
	return (
		<div
			className={`w-full ${className} flex md:flex-row flex-col justify-between items-center mb-[50px]`}>
			<div className={`${width} flex flex-col ${align} gap-3`}>
				<SectionTitle
					title={title}
					justify={justify}
					hideBtn={hideBtn}
					hasTowLines={hasTowLines}
					buttonText={buttonText}
				/>
				<SectionHeadLin>{headline}</SectionHeadLin>
				<SectionParagraph paragraph={paragraph} align={align} />
			</div>
			{!hideBtn && (
				<Button className='rounded-[10px] hidden md:flex'>{buttonText}</Button>
			)}
		</div>
	);
};

export default SectionContentBox;
