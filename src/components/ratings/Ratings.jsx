import React from "react";
import SectionContentBox from "../SectionContentBox";
import RatingSlider from "./ratingSlider/RatingSlider";

const Ratings = () => {
	return (
		<section className='container mt-[100px]'>
			<SectionContentBox
				width='w-full '
				align={"items-start"}
				title={"التقييمات"}
				hasTowLines={false}
				headline={
					<>
						ماذا يقول <span className='text-primary-700'> عملاؤنا </span>
						عنا
					</>
				}
				paragraph={
					"تجارب حقيقية وردود فعل صادقة. اكتشف لماذا يثق عملاؤنا في مجموعة الفايز في احتياجاتهم من نقل المركبات."
				}
				buttonText={"المزيد"}
			/>
			<RatingSlider />
		</section>
	);
};

export default Ratings;
