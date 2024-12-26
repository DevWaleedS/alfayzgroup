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

const NavLinks = () => {
	const [activeLink, setActiveLink] = useState("#home");

	const handleLinkClick = (href) => {
		setActiveLink(href);
	};

	return (
		<ul className='flex p-0 m-0 list-none gap-x-6'>
			{links.map((link, index) => (
				<li key={index} className='flex items-end justify-center gap-1 '>
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
	);
};

export default NavLinks;
