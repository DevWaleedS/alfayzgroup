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
				<div className=' relative flex justify-between items-start py-[120px]'>
					<FooterLogoBox />

					<section className='w-[920px] flex items-start justify-between'>
						<FooterLinksBox />
						<FooterContactUsInfoBox />
					</section>

					<SocialLinks position=' -left-20 bottom-[10rem]' />
				</div>
			</section>

			<section className=' relative py-[30px] border-t-[1px] border-grayscale-100'>
				<p className='w-full text-center text-lg font-medium leading-[28.8px] '>
					جميع الحقوق محفوظه لدى{" "}
					<span className='text-primary-800 text-[20px] font-bold leading-[24px] '>
						الفايز جروب
					</span>{" "}
					-2024
				</p>

				<MaskGroupFooter className='absolute bottom-0 left-0 w-[326px] h-[60px]' />
			</section>
		</footer>
	);
};

export default Footer;
