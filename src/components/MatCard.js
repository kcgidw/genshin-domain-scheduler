import React from 'react';
import cn from 'classnames';
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

	const cns = cn({
		'py-4 px-8 flex flex-row cursor-pointer transition-all hover:bg-gray-600': true,
	});

	return (
		<div className={cns}>
			<div className="h-16 w-16 mr-4 flex-shrink-0">
				<CharacterImage name={data.name}></CharacterImage>
			</div>
			<div className="flex flex-col">
				<h4 className="h-8">{data.name.toUpperCase()}</h4>
				<div className="h-8 flex flex-row flex-wrap relative -top-1">
					{renderCharacters()}
				</div>
			</div>
		</div>
	);
};

export default MatCard;
