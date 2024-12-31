import React from "react";

import {
	DeliveryTruckIcon,
	PaperIcon,
	GlobeIcon,
	ShadowUnderIcons,
	DeliveryTruckIconGray,
	WorldWhite,
	PaperIconWhite,
} from "../../assets/icons";

const Tabs = ({ handleTab, activeTab }) => {
	const tabsContent = [
		{
			id: 1,
			iconWhite: <DeliveryTruckIcon className='w-8  md:w-auto' />,
			iconGray: <DeliveryTruckIconGray className='w-8  md:w-auto' />,
			title: "تتبع سيارتك",
		},
		{
			id: 2,
			iconGray: <PaperIcon className='w-8 md:w-auto' />,
			iconWhite: <PaperIconWhite className='w-8 md:w-auto' />,
			title: "الحجز السريع",
		},
		{
			id: 3,
			iconGray: <GlobeIcon className='w-8  md:w-auto' />,
			iconWhite: <WorldWhite className='w-8  md:w-auto' />,
			title: "مواقع فروعنا",
		},
	];

	return (
		<div className='absolute -top-6 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex items-center justify-center 2xl:gap-[100px] xl:gap-[50px] gap-2'>
			{tabsContent.map((tab) => (
				<button
					key={tab.id}
					onClick={() => handleTab(tab.title)}
					className={`relative 2xl:w-[250px] xl:h-[200px] h-[80px] md:[160px] lg:w-[230px] w-[140px] flex flex-col items-center justify-center text-center gap-[10px] md:rounded-[20px] rounded-xl md:py-[63px] py-3 md:px-[48px] px-3 group transition-colors delay-200 ease-in-out hover:bg-primary-700 shadow ${
						activeTab === tab.title ? "bg-primary-700" : "bg-bg-light"
					}`}>
					<div
						className={`absolute md:-top-12 -top-7 left-1/2 -translate-x-1/2 2xl:w-[118px] xl:w-[112px] w-[60px] 2xl:h-[118px] xl:h-[112px] h-[60px] rounded-full  flex flex-col items-center justify-center transition-colors delay-200 ease-in-out group-hover:bg-primary-700 shadow-inner ${
							activeTab === tab.title ? " bg-primary-700" : "bg-bg-light"
						}`}>
						{activeTab === tab.title ? tab.iconWhite : tab.iconGray}
						<ShadowUnderIcons />
					</div>
					<p
						className={`${
							activeTab === tab.title ? "text-bg-light" : "text-grayscale-400"
						} headline-3-ar transition-colors delay-200 ease-in-out group-hover:text-bg-light`}>
						{tab.title}
					</p>
				</button>
			))}
		</div>
	);
};

export default Tabs;
