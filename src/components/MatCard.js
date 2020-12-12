import React from 'react';
import { filterCharactersByMat } from '../data';
import CharacterImage from './CharacterImage';

const MatCard = ({ selection, data }) => {
	const renderCharacters = () => {
		return filterCharactersByMat(selection, data.name).map((charaName) => {
			return (
				<CharacterImage
					name={charaName}
					key={charaName}
				></CharacterImage>
			);
		});
	};

	return (
		<div className="p-2 border-2 border-gray-700 rounded-sm">
			<div>{data.name}</div>
			<div className="h-8 flex flex-row">{renderCharacters()}</div>
		</div>
	);
};

export default MatCard;
