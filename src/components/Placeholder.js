import React from 'react';

const Placeholder = ({ onLink }) => {
	return (
		<div className="m-auto mb-12 py-4 px-6 w-max bg-gray-200 text-gray-700 border-l-4 border-blue-500 shadow-md">
			<span>You haven't set any characters or weapons yet. </span>
			<span
				className="font-bold text-blue-500 hover:text-blue-400 cursor-pointer"
				onClick={onLink}
			>
				Customize your schedule
			</span>
		</div>
	);
};

export default Placeholder;
