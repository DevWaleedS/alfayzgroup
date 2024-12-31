import React, { useState } from "react";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import SelectLanguage from "./SelectLanguage";
import Button from "../button/Button";
import MenuBtn from "./MenuBtn";
import MenuMobile from "./MenuMobile";

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

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("#home");
	const [openMenu, setOpenMenu] = useState(false);

	const handleToggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	const handleLinkClick = (href) => {
		setActiveLink(href);
	};

	return (
		<nav
			className='container md:fixed  top-0 md:top-[55px] left-0 md:left-1/2 md:-translate-x-1/2 w-full h-[100px] flex justify-between items-center  py-0 md:px-[30px] px-2 bg-white rounded-[10px] border-b-[3px] border-primary-700 z-50'
			style={{
				backgroundImage: `url(../../../../assets/images/navbar-bg.png)`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}>
			<Logo />
			<NavLinks
				links={links}
				activeLink={activeLink}
				handleLinkClick={handleLinkClick}
			/>

			<section className='md:flex hidden items-center gap-x-8'>
				<SelectLanguage />
				<Button>تسجيل دخول</Button>
			</section>

			<div className='md:hidden flex items-start gap-4'>
				<SelectLanguage />
				<MenuBtn onClick={handleToggleMenu} />
			</div>
			<MenuMobile
				links={links}
				openMenu={openMenu}
				activeLink={activeLink}
				onClick={handleToggleMenu}
				handleLinkClick={handleLinkClick}
			/>
		</nav>
	);
};

export default Navbar;
