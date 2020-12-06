import React from 'react';
import { list } from '../data/characters';
import CharacterButton from './CharacterButton';

const Roster = ({ selection = {}, onSelectionChange }) => {
	const renderItems = () => {
		// todo useffect
		return list.map((item) => {
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
		<div className="">
			<div className="flex flex-row space-x-4">{renderItems()}</div>
		</div>
	);
};

export default Roster;
