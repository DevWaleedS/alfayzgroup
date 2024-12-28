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
		icon: <Partner01 className='w[86px] h-[100px]' />,
	},
	{
		id: 2,
		icon: <Partner02 className='w-[258.57px] h-[100px]' />,
	},
	{
		id: 3,
		icon: <Partner03 className='w-[113.79px] h-[100px]' />,
	},
	{
		id: 4,
		icon: <Partner04 className='w-[102.39px] h-[100px]' />,
	},
	{
		id: 5,
		icon: <Partner05 className='w-[250px] h-[100px]' />,
	},
	{
		id: 6,
		icon: <Partner06 className='w-[248px] h-[100px]' />,
	},
	{
		id: 7,
		icon: <Partner07 className='w-[177.78px] h-[100px]' />,
	},
	{
		id: 8,
		icon: <Partner01 className='w[86px] h-[100px]' />,
	},
	{
		id: 9,
		icon: <Partner02 className='w-[258.57px] h-[100px]' />,
	},
	{
		id: 10,
		icon: <Partner03 className='w-[113.79px] h-[100px]' />,
	},
	{
		id: 11,
		icon: <Partner04 className='w-[102.39px] h-[100px]' />,
	},
	{
		id: 12,
		icon: <Partner05 className='w-[250px] h-[100px]' />,
	},
	{
		id: 13,
		icon: <Partner06 className='w-[248px]  h-[100px]' />,
	},
];
const OurPartner = () => {
	return (
		<section className='container '>
			<div className=' mt-[100px]'>
				<SectionContentBox
					width='w-[296px] mx-auto mb-[50px]'
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

				<div className='w-full flex items-center justify-center gap-[100px] flex-wrap '>
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
