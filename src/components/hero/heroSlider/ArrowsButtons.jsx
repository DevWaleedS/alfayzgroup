import React from "react";
import { LineBetweenArrows } from "../../../assets/icons";

const ArrowsButtons = ({ swiperRef, isEnd, isBeginning }) => {
	return (
		<div
			className={`flex justify-start items-center gap-2 absolute 2xl:bottom-[340px] xl:bottom-[480px] bottom-[10px] 2xl:!left-[5rem] xl:!left-0 !-left-32 z-10`}>
			<button
				className={`${
					isBeginning
						? "bg-primary-700 hover:bg-bg-light"
						: "bg-bg-light hover:bg-primary-700"
				} md:w-[40px] w-[30px] md:h-[40px] h-[30px] flex justify-center items-center next-button transition-colors delay-100 ease-in-out group   rounded-full p-2`}
				onClick={() => swiperRef.current?.slideNext()}>
				<svg
					className={`${
						isBeginning
							? "stroke-bg-light group-hover:stroke-primary-700"
							: "stroke-primary-700 group-hover:stroke-bg-light"
					}  transition-colors delay-200 ease-in-out`}
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
					viewBox='0 0 24 24'
					fill='none'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<polyline points='9 6 15 12 9 18' />
				</svg>
			</button>
			<LineBetweenArrows className='2xl:w-full xl:w-1/2 w-1/6' />
			<button
				className={`${
					isEnd
						? "bg-primary-700 hover:bg-bg-light"
						: "bg-bg-light hover:bg-primary-700"
				} md:w-[40px] w-[30px] md:h-[40px] h-[30px] flex justify-center items-center next-button transition-colors delay-100 ease-in-out group   rounded-full p-2`}
				onClick={() => swiperRef.current?.slidePrev()}>
				<svg
					className={`${
						isEnd
							? "stroke-bg-light group-hover:stroke-primary-700"
							: "stroke-primary-700 group-hover:stroke-bg-light"
					}  transition-colors delay-200 ease-in-out`}
					xmlns='http://www.w3.org/2000/svg'
					width='40'
					height='40'
					viewBox='0 0 24 24'
					fill='none'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<polyline points='15 18 9 12 15 6' />
				</svg>
			</button>
		</div>
	);
};

export default ArrowsButtons;
