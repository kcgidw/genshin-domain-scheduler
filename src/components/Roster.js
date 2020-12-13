import React from 'react';
import { list } from '../data/characters';
import CharacterButton from './CharacterButton';

const Roster = ({ selection = {}, onSelectionChange }) => {
	const renderItems = () => {
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
		<div className="max-w-6xl p-8 bg-gray-800 border-0 shadow">
			<div className="flex flex-row flex-wrap justify-items-center">
				{renderItems()}
			</div>
		</div>
	);
};

export default Roster;
