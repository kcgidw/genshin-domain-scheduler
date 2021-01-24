import React from 'react';
import cn from 'classnames';
import { useHover } from 'react-use';

const ViewTabButton = ({ isActive, onClick, icon, label }) => {
	const component = (isHovering) => {
		const cns = cn(
			'my-1 mx-2 md:mx-3 py-1 flex items-center space-x-1 border-b-2 text-xs text-navtext font-medium font-mont',
			{
				'border-transparent': !isActive,
				'text-navhover': isHovering || isActive,
				'border-navicon text-navcurrent': isActive,
			}
		);
		const iconCns = cn({
			'text-navicon': !isHovering && !isActive,
			'text-navhover': isHovering && !isActive,
			'text-navcurrent': isActive,
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
