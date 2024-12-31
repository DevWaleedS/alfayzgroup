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
				className='w-full cursor-pointer flex justify-between gap-2 items-center border-[3px] border-primary-700 md:rounded-xl rounded-lg md:px-[50px] px-[24px] md:py-4 py-3'>
				<h3 className='headline-4-ar'>{question}</h3>
				<span className='text-primary-700 md:text-2xl text-xl font-bold transition-all duration-300'>
					{isOpen ? (
						<MinceIcon className='md:w-5 md:h-5 w-4 h-4' />
					) : (
						<PlusIcon className='md:w-5 md:h-5 w-4 h-4' />
					)}
				</span>
			</div>
			<div
				className={`w-full transition-all duration-300 overflow-hidden headline-5-ar 
					${
						isOpen
							? "max-h-[500px] border-t-0 border-[2px] border-primary-700 md:rounded-b-[20px] rounded-b-xl -mt-10 md:px-[50px] px-[25px] md:py-[60px] py-[40px] opacity-100"
							: "max-h-0 opacity-0"
					}`}>
				{children}
			</div>
		</>
	);
};

export default QuestionAccordion;
