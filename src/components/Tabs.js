import React from 'react';
import cn from 'classnames';
import { useHover } from 'react-use';

const Tab = ({ children, isActive, onClick }) => {
	const component = (isHovering) => {
		const cns = cn('p-2 text-center cursor-pointer', {});
		const hCns = cn('mb-0 p-2 text-base sm:text-xl rounded', {
			'text-gray-200 bg-gray-600': isActive,
			'text-gray-400': !isActive,
			'text-gray-300 bg-gray-600': !isActive && isHovering,
		});

		return (
			<div className={cns} onClick={onClick}>
				<h1 className={hCns}>{children}</h1>
			</div>
		);
	};

	const [hoverable] = useHover(component);
	return <>{hoverable}</>;
};

const Tabs = ({ children, className }) => {
	const cns = cn(className, 'bg-gray-700 shadow-md');
	return <div className={cns}>{children}</div>;
};

export { Tab, Tabs };
