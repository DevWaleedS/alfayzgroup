import React from "react";
import { CallCenter, MessageRed, WhatsAppIcon } from "../assets/icons";

const SocialLinksData = [
	{ icon: <WhatsAppIcon className='w-[100px] h-[100px]' />, href: "#" },
	{ icon: <MessageRed className='w-[100px] h-[100px]' />, href: "#" },
	{ icon: <CallCenter className='w-[100px] h-[100px]' />, href: "#" },
];

const ContactUsInfo = () => {
	return (
		<div className='fixed md:right-0 -right-[14rem] md:bottom-10 bottom-12 z-50'>
			<div
				className={`w-[100px] flex flex-col items-center justify-center gap-3 `}>
				{SocialLinksData.map((link, index) => (
					<a
						className='w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-primary-700 transition-colors delay-150'
						key={index}
						href={link.href}>
						{link.icon}
					</a>
				))}
			</div>
		</div>
	);
};

export default ContactUsInfo;
