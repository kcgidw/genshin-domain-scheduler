import React from 'react';
import cn from 'classnames';

const ViewTabButton = ({ isActive, onClick, children }) => {
	const cns = cn({
		'bg-green-300': isActive,
	});
	return (
		<button className={cns} onClick={onClick}>
			{children}
		</button>
	);
};

export default ViewTabButton;
