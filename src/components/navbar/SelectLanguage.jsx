import React, { useState } from "react";
import { World } from "../../assets/icons";

const SelectLanguage = () => {
	const [language, setLanguage] = useState("English");
	const [isOpen, setIsOpen] = useState(false);

	const handleLanguageChange = (lang) => {
		setLanguage(lang);
		setIsOpen(false);
	};

	return (
		<div className='relative w-[90px] h-[28px]  cursor-pointer'>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center  gap-[10px]'>
				<World className='w-4 h-4' />
				<span className='text-[20px] leading-[28px] font-medium text-gray-500'>
					{language}
				</span>
			</div>
			{isOpen && (
				<div className='absolute top-full mt-2 w-full bg-white border border-gray-300 rounded shadow-lg'>
					<div
						onClick={() => handleLanguageChange("English")}
						className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
						English
					</div>
					<div
						onClick={() => handleLanguageChange("العربية")}
						className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
						العربية
					</div>
				</div>
			)}
		</div>
	);
};

export default SelectLanguage;
