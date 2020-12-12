import React from 'react';
import cn from 'classnames';
import CharacterImage from './CharacterImage';

const CharacterButton = ({ data, isSelected, onToggle }) => {
	const cns = cn(
		'flex-grow-0 flex flex-col justify-between text-center m-1 p-3 w-28 h-28 border-2 border-gray-700 rounded cursor-pointer transition-all ',
		'hover:bg-gray-700',
		{
			'bg-green-300 border-green-600 text-green-800 hover:bg-green-300': isSelected,
		}
	);
	return (
		<div className={cns} onClick={onToggle}>
			<div className="h-16 flex justify-center">
				<CharacterImage name={data.name}></CharacterImage>
			</div>
			<span>{data.name}</span>
		</div>
	);
};

export default CharacterButton;
