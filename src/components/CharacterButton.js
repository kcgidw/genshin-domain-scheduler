import React from 'react';
import cn from 'classnames';
import CharacterImage from './CharacterImage';

const CharacterButton = ({ data, isSelected, onToggle }) => {
	const cns = cn(
		'flex-grow-0 flex flex-col justify-between text-center p-3 w-24 h-30 border rounded-sm cursor-pointer',
		{
			'bg-green-300': isSelected,
		}
	);
	return (
		<div className={cns} onClick={onToggle}>
			<CharacterImage id={data.name}></CharacterImage>
			<span>{data.name}</span>
		</div>
	);
};

export default CharacterButton;
