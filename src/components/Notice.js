import React from 'react';

const Notice = ({ children }) => {
	return (
		<div className="mb-4 py-4 px-6 notice-fade text-sm md:text-base">
			{children}
		</div>
	);
};

export default Notice;
