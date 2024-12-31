import React, { useState } from "react";
import ArrowLeftIcon from "../ArrowLeftIcon";

const links = [
	{ href: "#home", text: "الرئيسية" },
	{ href: "#about", text: "من نحن" },
	{ href: "#services", text: "خدماتنا" },
	{ href: "#partners", text: "شركاؤنا" },
	{ href: "#tracking", text: "التتبع" },
	{ href: "#booking", text: "الحجز" },
	{ href: "#branches", text: "فروعنا" },
	{ href: "#careers", text: "الوظائف" },
	{ href: "#contact", text: "تواصل معنا" },
];

const FooterLinksBox = () => {
	const [activeLink, setActiveLink] = useState("#home");

	const handleLinkClick = (href) => {
		setActiveLink(href);
	};
	return (
		<section>
			<h4 className=' headline-4-ar text-grayscale-700 text-right mb-[25px]'>
				الفايز جروب
			</h4>
			<ul className='md:w-[398px] w-full flex items-start gap-x-[70px] gap-y-5 flex-wrap '>
				{links.map((link, index) => (
					<li
						key={index}
						className='w-[70px] flex items-center justify-start gap-1 '>
						{activeLink === link.href && (
							<ArrowLeftIcon className='inline-block ' />
						)}
						<a
							className={`text-base font-medium transition-colors delay-300 ease-in-out ${
								activeLink === link.href
									? "text-primary-700"
									: "text-gray-600 hover:text-primary-700"
							}`}
							href={link.href}
							onClick={() => handleLinkClick(link.href)}>
							{link.text}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default FooterLinksBox;
