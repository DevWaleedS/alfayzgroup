import React, { useState } from "react";
import TrackOrderForm from "./forms/TrackOrderForm";
import QuickBooking from "./forms/QuickBooking";
import LocationsOurBranches from "./forms/LocationsOurBranches";
import Tabs from "./Tabs";

const TrackYourOrder = () => {
	const [tab, setTab] = useState("تتبع سيارتك");
	const handleTab = (tab) => {
		setTab(tab);
	};
	return (
		<section className='relative z-[1] bottom-[750px] -left-1/2 translate-x-1/2 w-[1200px] h-[422px] border-[7px] border-primary-700 rounded-[20px] bg-bg-light '>
			<Tabs handleTab={handleTab} activeTab={tab} />
			{tab === "تتبع سيارتك" && <TrackOrderForm />}
			{tab === "الحجز السريع" && <QuickBooking />}
			{tab === "مواقع فروعنا" && <LocationsOurBranches />}
		</section>
	);
};

export default TrackYourOrder;