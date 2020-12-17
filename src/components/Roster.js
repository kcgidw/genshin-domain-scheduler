import React from 'react';
import { getAllCharacters } from '../data';
import CharacterButton from './CharacterButton';

const Roster = ({ selection = {}, onSelectionChange }) => {
	const renderItems = () => {
		return getAllCharacters().map((item) => {
			const onToggle = () => {
				const newSelection = { ...selection };
				if (selection[item.name]) {
					delete newSelection[item.name];
				} else {
					newSelection[item.name] = true;
				}
				onSelectionChange(newSelection);
			};
			return (
				<CharacterButton
					data={item}
					key={item.name}
					isSelected={selection[item.name]}
					onToggle={onToggle}
				></CharacterButton>
			);
		});
	};
	return (
		<div className="md:px-4">
			<div className="flex flex-row flex-wrap mb-2">{renderItems()}</div>
			<div className="text-xs">
				Note: The required talent mat for Traveler varies based on each
				individual talent's element and level.
			</div>
		</div>
	);
};

export default Roster;
