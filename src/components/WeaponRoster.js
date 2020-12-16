import React from 'react';
import { getAllWeapons } from '../data';
import WeaponButton from './WeaponButton';

const WeaponRoster = ({ selection = {}, onSelectionChange }) => {
	const renderItems = () => {
		return getAllWeapons().map((item) => {
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
				<WeaponButton
					data={item}
					key={item.name}
					isSelected={selection[item.name]}
					onToggle={onToggle}
				></WeaponButton>
			);
		});
	};
	return (
		<div className="p-4 md:p-8 section-card">
			<h1>Weapons</h1>
			<div className="flex flex-row flex-wrap">{renderItems()}</div>
		</div>
	);
};

export default WeaponRoster;
