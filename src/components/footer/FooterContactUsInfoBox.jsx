import React from "react";
import { Call, Message } from "../../assets/icons";
import SectionParagraph from "../SectionParagraph";

const contactUsInfo = [
	{ id: 1, text: "920004353", icon: <Call /> },
	{
		id: 2,
		text: "(بريد إلكتروني للمبيعات) sales@alfayzgroup.com",
		icon: <Message />,
	},
	{
		id: 3,
		text: "(البريد الإلكتروني التسويقي) marketing@alfayzgroup.com",
		icon: <Message />,
	},
	{
		id: 4,
		text: "(بريد إلكتروني لخدمة العملاء) customerservice@alfayzgroup.com",
		icon: <Message />,
	},
];

const FooterContactUsInfoBox = () => {
	return (
		<section className='md:w-[471px] w-full flex flex-col items-start gap-[25px]'>
			<h4 className='headline-4-ar text-grayscale-700 text-right'>
				تواصل معنا
			</h4>
			<ul className='w-full flex flex-col items-start gap-[25px]'>
				{contactUsInfo.map((link) => (
					<li key={link.id} className='flex items-center justify-start gap-2 '>
						{link.icon}
						<SectionParagraph align={"items-start"} paragraph={link.text} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default FooterContactUsInfoBox;
