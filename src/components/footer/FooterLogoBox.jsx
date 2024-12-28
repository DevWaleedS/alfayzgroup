import React from "react";
import Logo from "../navbar/Logo";
import SectionParagraph from "../SectionParagraph";

const FooterLogoBox = () => {
	return (
		<div className='w-[263px] flex flex-col items-start gap-[20px]'>
			<Logo />
			<SectionParagraph
				align={"items-start"}
				paragraph={
					"تقديم حلول نقل المركبات الموثوقة والفعالة والآمنة مع الالتزام بالتميز وإرضاء العملاء"
				}
			/>
		</div>
	);
};

export default FooterLogoBox;
