import React from "react";
import ContactInput from "./ContactInput";
import {
	Book,
	BorderBottom,
	Call,
	Message,
	OpenMessage,
	UserIcon,
} from "../../../assets/icons";
import Button from "../../button/Button";

const ContactUsForm = () => {
	const handleOnSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<form
			onSubmit={handleOnSubmit}
			className='flex flex-col items-start w-full md:gap-[50px] gap-6 shadow-form-red-blur md:py-[50px] py-8 md:px-[49px] px-8'>
			<div className='flex flex-col items-start gap-[30px] '>
				<div className='flex flex-col items-start gap-4 '>
					<h3 className='headline-3-ar  text-grayscale-600'>
						املء بيانات النموذج بالاسفل...
					</h3>
					<p className='text-base leading-[23.52px] font-medium  text-[#3B636B] text-right'>
						قم بملء المعلومات في النموذج أدناه وسنتصل بك في أقرب وقت ممكن
					</p>
				</div>
				<BorderBottom className='max-w-full' />
			</div>

			<ContactInput
				type={"text"}
				placeholder={"الاسم"}
				icon={<UserIcon className='w-[18px] h-[18px]' />}
			/>
			<ContactInput
				type={"email"}
				placeholder={"البريد الالكتروني"}
				icon={<Message className='w-[18px] h-[18px]' />}
			/>
			<ContactInput
				type={"tel"}
				placeholder={"رقم الجوال"}
				icon={<Call className='w-[18px] h-[18px] x' />}
			/>
			<ContactInput
				type={"text"}
				placeholder={"الموضوع"}
				icon={<Book className='w-[18px] h-[18px]' />}
			/>
			<ContactInput
				type={"textarea"}
				placeholder={"الرسالة"}
				icon={<OpenMessage className='w-[18px] h-[18px]' />}
			/>
			<Button className='w-full rounded-[10px]'>ارسال</Button>
		</form>
	);
};

export default ContactUsForm;
