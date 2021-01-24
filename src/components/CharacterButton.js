import React from 'react';
import cn from 'classnames';
import Image from './Image';
import { cap } from '../util';

const CharacterButton = ({ data, isSelected, onToggle }) => {
	const cns = cn(
		'flex-grow-0 text-center m-1 p-1 sm:p-2 w-20 sm:w-24 text-xs border-2 rounded cursor-pointer transition-all',
		{
			'border-rosterbutton hover:bg-rosterbutton': !isSelected,
			'bg-green-300 border-green-600 text-green-900 hover:opacity-70': isSelected,
		}
	);
	return (
		<div className={cns} onClick={onToggle}>
			<div className="h-8 md:h-12 flex justify-center">
				<Image name={data.name}></Image>
			</div>
			<div>{cap(data.name)}</div>
		</div>
	);
};

export default CharacterButton;
