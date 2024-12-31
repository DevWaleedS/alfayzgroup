import React from "react";
import SectionContentBox from "../SectionContentBox";
import {
	Partner01,
	Partner02,
	Partner03,
	Partner04,
	Partner05,
	Partner06,
	Partner07,
} from "../../assets/icons";

const partenersData = [
	{
		id: 1,
		icon: <Partner01 className='md:w[86px] w-[75px] md:h-[100px] h-[75px]' />,
	},
	{
		id: 2,
		icon: <Partner02 className='md:w-[258.57px] w-[200px] h-[100px]' />,
	},
	{
		id: 3,
		icon: (
			<Partner03 className='md:w-[113.79px] w-[80px] md:h-[100px] h-[75px]' />
		),
	},
	{
		id: 4,
		icon: <Partner04 className='md:w-[102.39px] w-[85px] h-[100px]' />,
	},
	{
		id: 5,
		icon: <Partner05 className='md:w-[250px] w-[200px] h-[100px]' />,
	},
	{
		id: 6,
		icon: <Partner06 className='md:w-[248px] w-[200px] h-[100px]' />,
	},
	{
		id: 7,
		icon: <Partner07 className='md:w-[177.78px] w-[115px] h-[100px]' />,
	},
	{
		id: 8,
		icon: <Partner01 className='md:w[86px] w-[75px] md:h-[100px] h-[75px]' />,
	},
	{
		id: 9,
		icon: <Partner02 className='md:w-[258.57px] w-[200px] h-[100px]' />,
	},
	{
		id: 10,
		icon: (
			<Partner03 className='md:w-[113.79px] w-[80px] md:h-[100px] h-[75px]' />
		),
	},
	{
		id: 11,
		icon: <Partner04 className='md:w-[102.39px] w-[85px] h-[100px]' />,
	},
	{
		id: 12,
		icon: <Partner05 className='md:w-[250px] w-[200px] h-[100px]' />,
	},
	{
		id: 13,
		icon: <Partner06 className='md:w-[248px] w-[200px] h-[100px]' />,
	},
];
const OurPartner = () => {
	return (
		<section className='container '>
			<div className=' mt-[100px]'>
				<SectionContentBox
					justify='justify-center'
					width='md:w-[296px] w-full mx-auto mb-[50px]'
					align={"items-center"}
					title={"شركاؤنا"}
					hasTowLines={true}
					headline={
						<>
							القوة في
							<span className='text-primary-700'> التعاون</span>
						</>
					}
					paragraph={"أسماء موثوقة، متحدة لتوفير نقل سلس للسيارات."}
					hideBtn={true}
				/>

				<div className='w-full flex items-center justify-center md:gap-[100px] gap-8 flex-wrap '>
					{partenersData.map((item) => (
						<div key={item.id} className=' flex items-center justify-center'>
							{item.icon}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurPartner;
