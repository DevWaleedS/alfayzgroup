import React from "react";
import Button from "../button/Button";
import ArrowLeftIcon from "../ArrowLeftIcon";
import MenuBtn from "./MenuBtn";

const MenuMobile = ({
	links,
	activeLink,
	handleLinkClick,
	openMenu,
	onClick,
}) => {
	return (
		<ul
			className={` fixed z-50 ${
				openMenu ? "-translate-x-1/2 left-1/2" : "-translate-x-full"
			} top-0 w-full max-w-full md:hidden flex flex-col text-center p-8  list-none gap-x-6 gap-y-6  bg-bg-light shadow-aboutUs-shadow `}>
			<div className='me-auto'>
				<MenuBtn onClick={onClick} />
			</div>
			{links.map((link, index) => (
				<li
					key={index}
					onClick={onClick}
					className='w-full flex items-end justify-center gap-1 py-2 '>
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
			<section className='flex gap-8  md:hidden items-center  '>
				<Button className='w-full'>تسجيل دخول</Button>
			</section>
		</ul>
	);
};

export default MenuMobile;
