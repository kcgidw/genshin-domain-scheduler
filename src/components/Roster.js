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
		<div className="p-4 md:p-8 section-card">
			<h1 className="font-sans">Characters</h1>
			<div className="flex flex-row flex-wrap">{renderItems()}</div>
		</div>
	);
};

export default Roster;
