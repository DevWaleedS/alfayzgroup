import React from "react";
import ArrowLeftIcon from "../ArrowLeftIcon";

const NavLinks = ({ links, activeLink, handleLinkClick }) => {
	return (
		<ul className='md:flex hidden p-0 m-0 list-none gap-x-6'>
			{links.map((link, index) => (
				<li key={index} className='flex items-end justify-center gap-1'>
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
