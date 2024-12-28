import React, { useState } from "react";
import { MinceIcon, PlusIcon } from "../../assets/icons";

const QuestionAccordion = ({ question, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<div
				onClick={toggleAccordion}
				className='w-full cursor-pointer flex justify-between items-center border-[3px] border-primary-700 rounded-[20px] px-[50px] py-[30px]'>
				<h3 className='headline-3-ar'>{question}</h3>
				<span className='text-primary-700 text-2xl font-bold transition-all duration-300'>
					{isOpen ? <MinceIcon /> : <PlusIcon />}
				</span>
			</div>
			<div
				className={`w-full transition-all duration-300 overflow-hidden headline-5-ar  ${
					isOpen
						? "max-h-[500px] border-t-0 border-[2px] border-primary-700 rounded-b-[20px] -mt-10 px-[50px] py-[60px] opacity-100"
						: "max-h-0 opacity-0"
				}`}>
				{children}
			</div>
		</>
	);
};

export default QuestionAccordion;
