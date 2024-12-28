import React from "react";
import SectionContentBox from "../SectionContentBox";
import {
	ourService01,
	ourService02,
	ourService03,
	ourService04,
} from "../../assets/images";
import {
	Badge,
	DeliveryVan,
	Diamond,
	Shipping,
	Vector25,
} from "../../assets/icons";
import Button from "../button/Button";

const servicesData = [
	{
		id: 1,
		title: "شحن البضائع",
		desc: "من خلال التركيز على تقديم أفضل الخدمات في فئتها لعملائنا، فنحن دائمًا متاحون لمساعدتك",
		img: ourService01,
		icon: <DeliveryVan />,
	},
	{
		id: 2,
		title: "الشحن الاعتادي",
		desc: "من خلال التركيز على تقديم أفضل الخدمات في فئتها لعملائنا، فنحن دائمًا متاحون لمساعدتك",
		img: ourService02,
		icon: <Shipping />,
	},
	{
		id: 3,
		title: "الشحن الممتاز",
		desc: "من خلال التركيز على تقديم أفضل الخدمات في فئتها لعملائنا، فنحن دائمًا متاحون لمساعدتك",
		img: ourService03,
		icon: <Diamond />,
	},
	{
		id: 4,
		title: "الشحن الخاص",
		desc: "من خلال التركيز على تقديم أفضل الخدمات في فئتها لعملائنا، فنحن دائمًا متاحون لمساعدتك",
		img: ourService04,
		icon: <Badge />,
	},
];

const OurServices = () => {
	return (
		<section className='bg-bg-darken  mt-[160px] '>
			<div className='container '>
				<SectionContentBox
					className='pt-[80px]'
					title={"خدماتنا"}
					headline={
						<>
							خدمات <span className='text-primary-700'>نقل السيارات </span>
							الشاملة
						</>
					}
					paragraph={
						"سواء كانت سيارة واحدة أو أسطولاً كاملاً، فإننا نقدم حلول نقل مخصصة ومصممة لتناسب احتياجاتك. من الاستلام إلى التسليم، نضمن التعامل مع كل خطوة بعناية ودقة."
					}
					buttonText='المزيد'
				/>

				<section className='  flex justify-between flex-wrap gap-[30px]'>
					{servicesData.map((item) => (
						<div className='relative w-max h-[594px]' key={item.id}>
							<div className=' absolute left-5 -top-10 w-[136px] h-[140px] py-[35px] px-[33px] bg-bg-light rounded-full'>
								{item.icon}
							</div>
							<div className='w-full h-[536px] pt-[2px] px-[12px] pb-[30px] bg-white transition-shadow delay-200 ease-in-out hover:shadow-serviceBoxShadow rounded-[20px]'>
								<img
									className='w-[375px] h-[250px] object-cover mb-8'
									loading='lazy'
									src={item.img}
									alt={item.title}
								/>
								<div className='flex flex-col items-start gap-[19px]'>
									<h3 className='headline-3-ar text-grayscale-600'>
										{item.title}
									</h3>
									<div className='w-[360px] h-[24px] flex justify-between '>
										<div className='w-[110px] h-full flex items-center gap-3'>
											<Vector25 className='h-5' />
											<span className='text-base font-medium leading-[23.52px] text-grayscale-400'>
												البضائع الجافة
											</span>
										</div>
										<div className='w-[110px] h-full flex items-center gap-3'>
											<Vector25 className='h-5' />
											<span className='text-base font-medium leading-[23.52px] text-grayscale-400'>
												مشروع الشحن
											</span>
										</div>
										<div className='w-[110px] h-full flex items-center gap-3'>
											<Vector25 className='h-5' />
											<span className='text-base font-medium leading-[23.52px] text-grayscale-400'>
												بضائع مبردة
											</span>
										</div>
									</div>

									<p className='w-[375px] text-balance leading-[23.52px] font-medium text-right text-grayscale-500'>
										{item.desc}
									</p>
									<Button icon className='w-full rounded-[13px]'>
										معرفة المزيد
									</Button>
								</div>
							</div>
						</div>
					))}
				</section>
			</div>
		</section>
	);
};

export default OurServices;
