import React from "react";
import SectionContentBox from "../SectionContentBox";
import { aboutUsImg } from "../../assets/images";
import {
	AboutUsIcon01,
	AboutUsIcon02,
	AboutUsIcon03,
} from "../../assets/icons";
import SectionParagraph from "../SectionParagraph";

const aboutUsData = [
	{
		id: 1,
		title: "رؤيتنا",
		desc: "أن نكون الخيار الأول في مجال نقل السيارات والبضائع والخدمات اللوجستية بما يفوق توقعات عملائنا الأفراد والشركات ويساهم في تحقيق رؤية المملكة العربية السعودية 2030.",

		icon: <AboutUsIcon01 className='md:w-auto md:h-auto h-20 w-20' />,
	},
	{
		id: 2,
		title: "رسالتنا",
		desc: "تقديم خدمات نقل السيارات والبضائع والخدمات اللوجستية بطريقة احترافية وبناء علاقات طويلة الأمد مع عملائنا داخل وخارج المملكة العربية السعودية وتطوير سياسات وبرامج وخطط تطويرية عالية الكفاءة تعمل على تعظيم قيمة القطاع سعياً لتحقيق التنمية المستدامة والاستفادة من طاقات أبناء الوطن.",

		icon: <AboutUsIcon02 className='md:w-auto md:h-auto h-20 w-20' />,
	},
	{
		id: 3,
		title: "كلمة رئيس مجلس الادراة",
		desc: "ولله الحمد امتلكنا الكفاءة والتميز في قطاع نقل السيارات والبضائع والخدمات اللوجستية وتحقيق خدمات تسعد عملائنا وتنال رضاهم من خلال أكثر من 30 عاماً من الخبرة في مسيرتنا المهنية والتي حققت لنا خبرة عالية في مجالنا حيث نسعى دائماً أن نكون الأفضل وأن يكون رضا عملائنا دائماً من أولوياتنا.",

		icon: <AboutUsIcon03 className='md:w-auto md:h-auto h-20 w-20' />,
	},
];

const AboutUs = () => {
	return (
		<section className='mt-[80px]'>
			<div className='container'>
				<SectionContentBox
					title={"نبذه عنا"}
					headline={
						<>
							تعرف على <span className='text-primary-700'> الفايز قيادة </span>{" "}
							<br />
							الثقة في عالم نقل السيارات
						</>
					}
					buttonText='معرفة المزيد'
				/>

				<section className='w-full flex md:flex-row flex-col items-center md:gap-12 gap-6'>
					<div className='md:w-[662px] w-full md:h-[647px] h-full '>
						<img src={aboutUsImg} alt='نبذه عنا' />
					</div>
					<div className='md:w-[830px] w-full md:h-[914px] h-auto flex flex-col items-end md:gap-[82px] gap-6'>
						{aboutUsData.map((item) => (
							<div
								className={`${
									item.id === 1 ? "md:w-[610px] w-full" : "w-full"
								} md:h-[250px] h-auto flex md:flex-row flex-col justify-between items-center md:py-[30px] py-[15px] px-[15px] bg-bg-light shadow-aboutUs-shadow md:rounded-[30px] rounded-xl`}
								key={item.id}>
								<span className='flex md:hidden'>{item.icon}</span>

								<div className='flex flex-col gap-2 items-center px-[20px]'>
									<h3 className='headline-3-ar text-grayscale-600'>
										{item.title}
									</h3>

									<SectionParagraph paragraph={item.desc} />
								</div>
								<span className='md:flex hidden'>{item.icon}</span>
							</div>
						))}
					</div>
				</section>
			</div>
		</section>
	);
};

export default AboutUs;
