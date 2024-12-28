import React from "react";
import { Facebook, Instagram, Linkedin, TwitterX } from "../../assets/icons";

const SocialLinksData = [
	{ icon: <Instagram className='w-[15px] h-[15px]' />, href: "#" },
	{ icon: <TwitterX className='w-[15px] h-[15px]' />, href: "#" },
	{ icon: <Facebook className='w-[15px] h-[15px]' />, href: "#" },
	{ icon: <Linkedin className='w-[15px] h-[15px]' />, href: "#" },
];

const SocialLinks = ({ position }) => {
	return (
		<div
			className={`absolute ${position} w-[60px] flex flex-col items-center justify-center gap-3`}>
			{SocialLinksData.map((link, index) => (
				<a
					className='w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-primary-700 transition-colors delay-150'
					key={index}
					href={link.href}>
					{link.icon}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
