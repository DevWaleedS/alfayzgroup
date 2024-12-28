import React from "react";

const SectionParagraph = ({ paragraph, align }) => {
	return (
		<p
			className={` text-base leading-[23.52px] font-medium  text-grayscale-500 ${
				align === "items-start" ? "text-right" : "text-center"
			}`}>
			{paragraph}
		</p>
	);
};

export default SectionParagraph;
