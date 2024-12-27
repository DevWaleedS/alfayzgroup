import React, { useEffect, useState } from "react";
import {
	LineAfterStatistic,
	Statistic01,
	Statistic02,
	Statistic03,
	Statistic04,
	Statistic05,
} from "../../assets/icons";

import CountUp from "react-countup";

const statisticData = [
	{
		id: 1,
		icon: <Statistic01 className='h-[100px] w-[100px]' />,
		title: "مواقع",
		count: "10",
	},
	{
		id: 2,
		icon: <Statistic02 className='h-[50px] w-[175.26px]' />,
		title: "شاحنة نقل السيارات",
		count: "150",
	},
	{
		id: 3,
		icon: <Statistic03 className='h-[100px] w-[100px]' />,
		title: "شاحنة نقل سيارة",
		count: "160",
	},
	{
		id: 4,
		icon: <Statistic04 className='h-[100px] w-[106px]' />,
		title: "شاحنة بضائع",
		count: "20",
	},
	{
		id: 5,
		icon: <Statistic05 className='h-[100px] w-[102px]' />,
		title: "موظف",
		count: "100",
	},
];

const Statistic = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Create intersection observer
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Get the element to observe
		const element = document.getElementById("statistic");
		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, []);

	return (
		<section id='statistic' className=' container py-[180px]'>
			<div className='w-[1200px]  mx-auto flex justify-between items-center'>
				{statisticData.map((item) => (
					<div
						className='w-[184px] h-full flex flex-col gap-8 justify-center items-center'
						key={item.id}>
						<div className=' flex flex-col gap-[30px] justify-end items-center '>
							{" "}
							<div className='h-[100px]'> {item.icon}</div>
							<h2 className=' headline-2-ar text-center text-primary-700 '>
								<CountUp
									start={0}
									end={isVisible ? item.count : 0}
									duration={2.5}
									separator=','
								/>

								{item.count > 10 && `+`}
							</h2>
							<p className='text-balance leading-[23.52px] font-medium text-center text-grayscale-500'>
								{item.title}
							</p>
						</div>

						<LineAfterStatistic />
					</div>
				))}
			</div>
		</section>
	);
};

export default Statistic;
