import React from "react";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import SelectLanguage from "./SelectLanguage";
import Button from "../button/Button";

const Navbar = () => {
	return (
		<nav
			className='container fixed top-[55px] left-1/2 -translate-x-1/2 w-full  h-[100px] flex justify-between items-center  py-0 px-[30px] bg-white rounded-[10px] border-b-[3px] border-primary-700 z-50'
			style={{
				backgroundImage: `url(../../../../assets/images/navbar-bg.png)`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}>
			<Logo />
			<NavLinks />
			<section className='flex items-center gap-x-8'>
				<SelectLanguage />
				<Button>تسجيل دخول</Button>
			</section>
		</nav>
	);
};

export default Navbar;
