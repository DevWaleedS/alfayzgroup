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
			iconWhite: <DeliveryTruckIcon />,
			iconGray: <DeliveryTruckIconGray />,
			title: "تتبع سيارتك",
		},
		{
			id: 2,
			iconGray: <PaperIcon />,
			iconWhite: <PaperIconWhite />,
			title: "الحجز السريع",
		},
		{
			id: 3,
			iconGray: <GlobeIcon />,
			iconWhite: <WorldWhite />,
			title: "مواقع فروعنا",
		},
	];

	return (
		<div className='absolute -top-6 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[950px] h-[950px] flex items-center justify-center gap-[100px]'>
			{tabsContent.map((tab) => (
				<button
					key={tab.id}
					onClick={() => handleTab(tab.title)}
					className={` relative w-[250px] h-[200px] flex flex-col items-center text-center gap-[10px] rounded-[20px] py-[63px] px-[48px] group transition-colors delay-200 ease-in-out hover:bg-primary-700 ${
						activeTab === tab.title ? "bg-primary-700" : "bg-bg-light"
					}`}>
					<div
						className={`absolute -top-12 left-1/2 -translate-x-1/2  w-[118px] h-[118px] rounded-full  flex flex-col items-center justify-center transition-colors delay-200 ease-in-out group-hover:bg-primary-700 ${
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
