import React, { useState } from "react";
import TrackOrderForm from "./forms/TrackOrderForm";
import QuickBooking from "./forms/QuickBooking";
import LocationsOurBranches from "./forms/LocationsOurBranches";
import Tabs from "./Tabs";
import { LogoAsBg, ServicesIcon } from "../../assets/icons";

const TrackYourOrder = () => {
	const [tab, setTab] = useState("تتبع سيارتك");
	const handleTab = (tab) => {
		setTab(tab);
	};
	return (
		<section className=' relative z-10 xl:-top-[350px] lg:-bottom-[520px] -bottom-[8rem] -left-1/2 translate-x-1/2 2xl:w-[65%] xl:w-[85%] w-full  border-[7px] border-primary-700 md:rounded-[20px] rounded-lg bg-bg-light flex flex-col items-start md:py-[110px] py-8 md:px-[50px] px-8 '>
			<LogoAsBg className=' absolute 2xl:-right-80 xl:-right-28 -right-56 2xl:-bottom-[12rem] xl:-bottom-[11rem] -z-[1]' />
			<ServicesIcon className='absolute 2xl:-left-80 xl:-left-28 left-2 md:-bottom-[11rem] -bottom-14' />
			<Tabs handleTab={handleTab} activeTab={tab} />
			{tab === "تتبع سيارتك" && <TrackOrderForm />}
			{tab === "الحجز السريع" && <QuickBooking />}
			{tab === "مواقع فروعنا" && <LocationsOurBranches />}
		</section>
	);
};

export default TrackYourOrder;
