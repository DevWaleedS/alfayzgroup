import React from "react";
import FooterLogoBox from "./FooterLogoBox";
import FooterLinksBox from "./FooterLinksBox";
import FooterContactUsInfoBox from "./FooterContactUsInfoBox";
import SocialLinks from "../socialLinks/SocialLinks";
import { MaskGroupFooter } from "../../assets/icons";

const Footer = () => {
	return (
		<footer className='bg-bg-darken mt-[100px]'>
			<section className='container'>
				<div className='relative flex md:flex-row flex-col justify-between items-start md:py-[120px] py-14'>
					<FooterLogoBox />

					<section className='md:w-[920px] w-full flex md:flex-row flex-col items-start justify-between gap-20'>
						<FooterLinksBox />
						<FooterContactUsInfoBox />
					</section>

					<SocialLinks position='xl:-left-5 lg:-left-20 -left-5 bottom-[10rem]' />
				</div>
			</section>

			<section className='relative md:py-[30px] py-4 border-t-[1px] border-grayscale-100'>
				<p className='w-full text-center text-lg font-medium leading-[28.8px] '>
					جميع الحقوق محفوظه لدى{" "}
					<span className='text-primary-800 text-[20px] font-bold leading-[24px] '>
						الفايز جروب
					</span>{" "}
					-2024
				</p>

				<MaskGroupFooter className='absolute  md:bottom-0 bottom-0 md:left-0 left-auto md:right-auto -right-20 md:w-[126px] md:h-[60px] h-[40px]' />
			</section>
		</footer>
	);
};

export default Footer;
