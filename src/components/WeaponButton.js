import React from 'react';
import cn from 'classnames';
import { cap } from '../util';

const WeaponButton = ({ data, isSelected, onToggle }) => {
	const cns = cn(
		'm-2 py-2 px-4 flex-grow-0 flex flex-row text-sm border-2 border-gray-700 rounded cursor-pointer transition-all ',
		'hover:bg-gray-700',
		{
			'bg-green-300 border-green-600 text-green-900 hover:bg-green-300 hover:opacity-70': isSelected,
		}
	);
	return (
		<div className={cns} onClick={onToggle}>
			<span>{cap(data.name)}</span>
		</div>
	);
};

export default WeaponButton;
