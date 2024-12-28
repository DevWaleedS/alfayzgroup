import React from "react";
import SectionContentBox from "../SectionContentBox";
import QuestionAccordion from "./QuestionAccording";

const Questions = () => {
	return (
		<section className=' relative container mt-[180px]'>
			<SectionContentBox
				width='w-full '
				align={"items-center"}
				title={"إجابات على أسئلتك الشائعة"}
				hasTowLines={true}
				headline={
					<>
						إجابات على <span className='text-primary-700'>أسئلتك </span> الشائعة
					</>
				}
				hideBtn={true}
			/>

			<div className='w-[1110px] flex flex-col items-start mx-auto gap-6 '>
				<QuestionAccordion question='كيف يمكنني حجز خدمة نقل سيارة؟'>
					هنا اجابه السؤال.
				</QuestionAccordion>
				<QuestionAccordion question='هل تقدمون خدمات نقل السيارات إلى جميع المناطق؟'>
					هنا اجابه السؤال.
				</QuestionAccordion>
				<QuestionAccordion question='كيف يمكنني حجز خدمة نقل سيارة؟'>
					هنا اجابه السؤال.
				</QuestionAccordion>
				<QuestionAccordion question='هل تقدمون خدمات نقل السيارات إلى جميع المناطق؟'>
					هنا اجابه السؤال.
				</QuestionAccordion>
				<QuestionAccordion question='كيف يمكنني حجز خدمة نقل سيارة؟'>
					هنا اجابه السؤال.
				</QuestionAccordion>
			</div>
		</section>
	);
};

export default Questions;
