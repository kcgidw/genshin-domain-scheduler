import React from 'react';
import cn from 'classnames';
import { useHover } from 'react-use';

const ViewTabButton = ({ isActive, onClick, icon, label }) => {
	const component = (isHovering) => {
		const cns = cn(
			'my-1 mx-3 py-1 flex items-center space-x-1 text-xs font-mont border-b-2 border-gray-200 ',
			{
				'border-opacity-0': !isActive,
				'text-gray-200': isHovering || isActive,
				'border-opacity-40': isActive
			}
		);
		const iconCns = cn({
			'text-gray-500': !isHovering && !isActive,
			'text-gray-200': isHovering || isActive,
		});
		return (
			<button className={cns} onClick={onClick}>
				<span className={iconCns}>{icon}</span>
				<span>{label.toUpperCase()}</span>
			</button>
		);
	};
	const [hoverable] = useHover(component);
	return <>{hoverable}</>;
};

export default ViewTabButton;
