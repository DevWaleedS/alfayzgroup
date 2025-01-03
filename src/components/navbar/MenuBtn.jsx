import React from "react";

const MenuBtn = ({ onClick }) => {
	return (
		<button onClick={onClick}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'>
				<path
					d='M4 7L20 7'
					stroke='#d11116'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
				<path
					d='M9 12L20 12'
					stroke='#d11116'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
				<path
					d='M15 17L20 17'
					stroke='#d11116'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
			</svg>
		</button>
	);
};

export default MenuBtn;
