import React from "react";
import SectionContentBox from "../SectionContentBox";
import { ContactUsImg } from "../../assets/icons";
import ContactUsForm from "./contactUsForm/ContactUsForm";

const ContactUs = () => {
	return (
		<section className='container '>
			<div className='flex items-center gap-[50px] mt-8'>
				<div className='w-1/2 h-[696.69px] flex flex-col items-center '>
					<SectionContentBox
						width='w-full mx-auto'
						align={"items-center"}
						title={"تواصل معنا"}
						hasTowLines={true}
						headline={
							<>
								نحن هنا <span className='text-primary-700'> لمساعدتك </span> في
								اى وقت
							</>
						}
						paragraph={
							"نحن هنا للإجابة على جميع استفساراتك وتقديم الدعم الذي تحتاجه. يرجى ملء النموذج وسيتواصل معك فريقنا في أقرب وقت."
						}
						hideBtn={true}
					/>
					<ContactUsImg className='w-full' />
				</div>
				<div className='w-1/2  flex flex-col items-center gap-[10px] rounded-[30px] '>
					<ContactUsForm />
				</div>
			</div>
		</section>
	);
};

export default ContactUs;